import {useForm} from "react-hook-form";
import {setAuthData} from "@/src/shared/helper/setAuthData";
import {AuthStore, setAuthLoading, storeSetModalContent} from "@/src/shared/store/AuthStore";
import Spinner from "@/src/shared/ui/Spinner/Spinner";
import React, {useState} from "react";
import Image from "next/image";
import Eyes from "@/public/images/icons/icon-eys.svg"
import User from "@/public/images/icons/icon-user.svg"
import Email from "@/public/images/icons/icon-email.svg"
import Password from "@/public/images/icons/icon-password.svg"
import clsx from "clsx";
import {UserService} from "@/src/shared/api";

export interface RegisterData {
  nickname: string
  email: string
  password: string
}

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading } = AuthStore.useState((store) => store);
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const onHandleAuth = (value: 'register' | null) => {
    storeSetModalContent(value)
  }

  const onSubmit = async (data:RegisterData) => {
    try {
      setAuthLoading(true)
      const user = await UserService.AuthRegisterUser(data);
      if(user && user.accessToken) {
        setAuthData(user);
        setAuthLoading(false)
        reset();
      }
    } catch (err) {
      console.log('error', (err as Error).message)
      setAuthLoading(false)
    }
  };

  return (
   <>
      <h1 className="text-center text-white uppercase text-[24px]">Регистрация</h1>
      <form className="flex flex-col space-y-[10px]" onSubmit={handleSubmit(onSubmit)}>
        <div >
          <div className="relative">
            <input
              type="text"
              placeholder="Nickname"
              className="bg-[#3C445A99] text-white text-[14px] w-full border-[1px] border-[#666B8A80] rounded-[30px] px-[45px] py-[11px]"
              {...register('nickname', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 3,
                  message: 'Минимальное количество символов = 3'
                }
              })}
            />
            <Image
              src={User.src}
              width={User.width}
              height={User.height}
              alt="Иконка юзера"
              className="max-w-[20px] h-[20px] left-[15px] cursor-pointer absolute top-[50%] translate-y-[-50%]"
            />
          </div>
          {errors.nickname && <p className="text-[0.781vw] pl-[20px] text-error m-0">{errors.nickname.message as string}</p>}
        </div>
        <div >
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
        <div >
          <div className="relative">
            <Image
              src={Password.src}
              width={Password.width}
              height={Password.height}
              alt="Иконка юзера"
              className="max-w-[20px] h-[20px] left-[15px] cursor-pointer absolute top-[50%] translate-y-[-50%]"
            />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#3C445A99] text-white text-[14px] w-full border-[1px] border-[#666B8A80] rounded-[30px] px-[45px] py-[14px]"
              placeholder="Пароль"
              {...register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: { value: 6, message: 'Пароль должен быть мнимум 6 символа' }
              })}
            />
            <Image
              src={Eyes.src}
              width={Eyes.width}
              height={Eyes.height}
              alt="показать пароль"
              onClick={togglePassword}
              className="max-w-[20px] h-[20px] right-[15px] cursor-pointer absolute top-[50%] translate-y-[-50%]"
            />
          </div>
          {errors.password && <p className="text-[0.781vw] pl-[20px] text-error m-0">{errors.password.message as string}</p>}
        </div>
        <button
          className={clsx("flex items-center justify-center gap-[10px] border-[1px] rounded-[30px] border-accent py-[15px] bg-accent uppercase text-siteDark font-bold text-[16px]", {
            "opacity-75": loading
          })}
          type="submit"
          disabled={loading}
        >
          Зарегистрироваться
          {loading && <Spinner variant="small" />}
        </button>
        <div className="flex gap-[20px] justify-center text-accent">
          <p className="text-[#9093A7]"> Уже есть аккаунт?</p>
          <button onClick={() => onHandleAuth("login")} type="button font-medium text-[14px] ">Войти</button>
        </div>

        {/*{error && <p>{error}</p>}*/}
      </form>
   </>
  );
};

export default Register;
