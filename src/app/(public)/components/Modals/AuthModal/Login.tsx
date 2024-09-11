import React from 'react';
import {useForm} from "react-hook-form";
import {AuthLoginUser} from "@/src/shared/api/api";
import {setAuthData} from "@/src/shared/helper/setAuthData";
import {AuthStore, setAuthLoading} from "@/src/shared/store/AuthStore";
import Spinner from "@/src/shared/ui/Spinner/Spinner";

export interface LoginData {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading } = AuthStore.useState((store) => store);

  const onSubmit = async (data:LoginData) => {
    try {
      setAuthLoading(true)
      const user = await AuthLoginUser(data)
      if(user && user.accessToken) {
        setAuthData(user);
        setAuthLoading(false)
        reset()
      }
    } catch (err:any) {
      console.log('error', err.message)
      setAuthLoading(false)
    }
  }
  return (
    <div className="bg-white p-[50px] space-y-[10px]">
      <h1 className="text-center">Вход</h1>
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
        <button type="submit" className="border-[1px] border-accent py-[5px] bg-accent text-white">Войти</button>
      </form>
      {loading && <Spinner />}
      {/*{error && <p>{error}</p>}*/}
    </div>
  );
};

export default Login;