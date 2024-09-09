// pages/register.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import {FirebaseUser} from "@/shared/types/FirebaseUser";
import {SetUserAuth, storeSetModalActive, storeSetModalContent} from "@/shared/store/AuthStore";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user)
        .then(() => {
          console.log('Verification email sent!');
        })
        .catch((error) => {
          console.error('Error sending verification email:', error);
          setError(error.message);
        });
      await updateProfile(userCredential.user, {displayName: nickname,});
      const user:FirebaseUser = userCredential.user as FirebaseUser;

      if(user && user.emailVerified) {
        console.log('user',user)
        localStorage.setItem('accessToken', user.accessToken);
        storeSetModalContent(null);
        storeSetModalActive(false);
        SetUserAuth(user)
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="bg-white p-[50px] space-y-[10px] flex flex-col">
      <h1 className="text-center">Register</h1>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Nickname"
      />
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
      <button className="border-[1px] border-accent py-[5px] bg-accent text-white" onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
