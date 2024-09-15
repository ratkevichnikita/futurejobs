import React from 'react';
import {useForm} from "react-hook-form";
import {AuthStore, setAuthLoading, storeSetModalContent} from "@/src/shared/store/AuthStore";
import Spinner from "@/src/shared/ui/Spinner/Spinner";
import Image from"next/image";
import Email from "@/public/images/icons/icon-email.svg";
import clsx from "clsx";
import {UserService} from "@/src/shared/api";

export interface LoginData {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading } = AuthStore.useState((store) => store);

  const onHandleAuth = (value: 'reset' | null) => {
    storeSetModalContent(value);
  }

  const onSubmit = async (data:LoginData) => {
    try {
      setAuthLoading(true);
      const response = await UserService.AuthResetPassword(data.email);
      console.log('response',response)
      if(response) {
        setAuthLoading(false);
        reset();
      }
    } catch (err:any) {
      console.log('error', err.message);
      setAuthLoading(false);
    }
  }
  return (
    <>
      <h1 className="text-center text-white uppercase text-[24px]">Восстановить пароль</h1>
      <p className="text-center text-white text-[14px]">Введите почту на которую вы регистрировали аккаунт</p>
      <form className="flex flex-col space-y-[10px]" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="relative">
            <input
              type="email"
              className="bg-[#3C445A99] text-white text-[14px] w-full border-[1px] border-[#666B8A80] rounded-[30px] px-[45px] py-[14px]"
              placeholder="Email"
              {...register('email', { required: 'Поле обязательно для заполнения' })}
            />
            <Image
              src={Email.src}
              width={Email.width}
              height={Email.height}
              alt="Иконка юзера"
              className="max-w-[20px] h-[20px] left-[15px] cursor-pointer absolute top-[50%] translate-y-[-50%]"
            />
          </div>
          {errors.email && <p className="text-[0.781vw] pl-[20px] text-error m-0">{errors.email.message as string}</p>}
        </div>
        <button
          className={clsx("flex items-center justify-center gap-[10px] border-[1px] rounded-[30px] border-accent py-[15px] bg-accent uppercase text-siteDark font-bold text-[16px]", {
            "opacity-75": loading
          })}
          type="submit"
          disabled={loading}
        >
          Восстановить
          {loading && <Spinner variant="small" />}
        </button>
      </form>
      <div className="flex gap-[20px] justify-center text-accent">
        <p className="text-[#9093A7]">Уже есть аккаунт?</p>
        <button onClick={() => onHandleAuth("login")} type="button font-medium text-[14px] ">Вход</button>
      </div>
      {/*{error && <p>{error}</p>}*/}
    </>
  );
};

export default Login;