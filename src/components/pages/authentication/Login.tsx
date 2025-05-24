"use client";
import { useRouter } from "next/navigation";
import scss from "./Login.module.scss";
const Login = () => {
  const router = useRouter();
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
          <form action="">
            <div className={scss.inputs}>
              <input type="text" placeholder="@gmail.com" />
              <input type="text" placeholder="Password" />
              <button type="submit">Login</button>
            </div>
          </form>
          <p>-------- or --------</p>
          <button className={scss.google_btn}>Google</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
