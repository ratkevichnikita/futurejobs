import React, {useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/firebaseConfig";;
import {FirebaseUser} from "@/shared/types/FirebaseUser";
import {SetUserAuth, storeSetModalActive, storeSetModalContent} from "@/shared/store/AuthStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const user:FirebaseUser = resp.user as FirebaseUser
      if(user && user.accessToken) {
        localStorage.setItem('accessToken', user.accessToken);
        storeSetModalContent(null);
        storeSetModalActive(false);
        SetUserAuth(user);
      }
    } catch (err) {
      setError("Index failed: " + err.message);
    }
  };

  return (
    <div className="bg-white p-[50px] space-y-[10px]">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-[10px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="border-[1px] border-accent py-[5px] bg-accent text-white">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;