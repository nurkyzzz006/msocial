"use client";
import { useRouter } from "next/navigation";
import scss from "./Login.module.scss";
import { useLoginMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const [userLogin] = useLoginMutation();
  const { handleSubmit, register, reset } = useForm<LoginAuthRequest>();

  const LoginSub: SubmitHandler<LoginAuthRequest> = async (data) => {
    try {
      const { data: loginData } = await userLogin(data);
      if (loginData?.accessToken) {
        localStorage.setItem("token", JSON.stringify(loginData));
        router.push("/");
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <div id={scss.Login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.zag}>
            <h1 className={scss.login}>Login</h1>
            <span>|</span>
            <h1
              className={scss.register}
              onClick={() => router.push("/register")}
            >
              Register
            </h1>
          </div>
          <form action="" onSubmit={handleSubmit(LoginSub)}>
            <div className={scss.inputs}>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="@gmail.com"
              />
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="Password"
              />
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            <Link href={"/auth/forgot"}>Forgot Password</Link>
          </p>

          <button className={scss.google_btn}>Google</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
