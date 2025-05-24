"use client";
import { useRouter } from "next/navigation";
import scss from "./Register.module.scss";
const Register = () => {
  const router = useRouter();

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
          <form action="">
            <div className={scss.inputs}>
              <input type="text" placeholder="@gmail.com" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Repeat password" />
              <button type="submit">Register</button>
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
