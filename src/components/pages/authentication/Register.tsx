"use client";
import { useRouter } from "next/navigation";
import scss from "./Register.module.scss";
import { useRegisterMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const [userRegister] = useRegisterMutation();
  const { handleSubmit, register, reset } = useForm<IAuthRegRequest>();

  const onSubmit: SubmitHandler<IAuthRegRequest> = async (data) => {
    const newUser: IAuthRegRequest = {
      email: data.email,
      password: data.password,
      username: data.username,
      photo: data.photo,
    };
    try {
      const { data } = await userRegister(newUser);
      localStorage.setItem("token", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id={scss.Register}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.zag}>
            <h1 className={scss.login} onClick={() => router.push("/login")}>
              Login
            </h1>
            |<h1 className={scss.register}>Register</h1>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputs}>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
              />
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="Password"
              />
              <input
                {...register("username", { required: true })}
                type="text"
                placeholder="NickName"
              />
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="Photo URL"
              />
              <button type="submit" onClick={() => router.push("/")}>
                Register
              </button>
            </div>
          </form>
          <p>-------- or --------</p>
          <button className={scss.google_btn}>Google</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
