import React from 'react';
import {SetUserAuth, storeSetModalActive, storeSetModalContent} from "@/src/shared/store/AuthStore";
import {useForm} from "react-hook-form";
import {AuthLoginUser} from "@/src/shared/api/api";
import {setAuthData} from "@/src/shared/helper/setAuthData";

export interface LoginData {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data:LoginData) => {
    try {
      const user = await AuthLoginUser(data)
      if(user && user.accessToken) {
        setAuthData(user);
        reset()
      }
    } catch (err:any) {
      console.log('error', err.message)
    }
  }
  return (
    <div className="bg-white p-[50px] space-y-[10px]">
      <h1 className="text-center">Login</h1>
      <form className="flex flex-col space-y-[10px]" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.email && <p className="text-[0.781vw] text-error m-0">{errors.email.message as string}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Пароль"
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              minLength: { value: 6, message: 'Пароль должен быть мнимум 3 символа' }
            })}
          />
          {errors.password && <p className="text-[0.781vw] text-error m-0">{errors.password.message as string}</p>}
        </div>
        <button type="submit" className="border-[1px] border-accent py-[5px] bg-accent text-white">Log In</button>
      </form>
      {/*{error && <p>{error}</p>}*/}
    </div>
  );
};

export default Login;