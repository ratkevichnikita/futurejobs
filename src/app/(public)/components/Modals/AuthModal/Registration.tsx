import {SetUserAuth, storeSetModalActive, storeSetModalContent} from "@/src/shared/store/AuthStore";
import {useForm} from "react-hook-form";
import {AuthRegisterUser} from "@/src/shared/api/api";
import {setAuthData} from "@/src/shared/helper/setAuthData";

export interface RegisterData {
  nickname: string
  email: string
  password: string
}

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data:RegisterData) => {
    try {
      const user = await AuthRegisterUser(data);
      if(user && user.accessToken) {
        setAuthData(user);
        reset();
      }
    } catch (err) {
      console.log('error', (err as Error).message)
    }
  };

  return (
   <>
      <h1 className="text-center">Регистрация</h1>
      <form className="flex flex-col space-y-[10px]" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Nickname"
            {...register('nickname', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 3,
                message: 'Минимальное количество символов = 3'
              }
            })}
          />
          {errors.nickname && <p className="text-[0.781vw] text-error m-0">{errors.nickname.message as string}</p>}
        </div>
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
              minLength: { value: 6, message: 'Пароль должен быть мнимум 6 символа' }
            })}
          />
          {errors.password && <p className="text-[0.781vw] text-error m-0">{errors.password.message as string}</p>}
        </div>
        <button className="border-[1px] border-accent py-[5px] bg-accent text-white" type="submit">Зарегистрироваться</button>
        {/*{error && <p>{error}</p>}*/}
      </form>
   </>
  );
};

export default Register;
