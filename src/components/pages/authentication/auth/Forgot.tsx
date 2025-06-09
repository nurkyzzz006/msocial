"use client";
import { useState } from "react";
import scss from "./Forgot.module.scss";
import { useForgotPasswordMutation } from "@/redux/api/auth";

const Forgot = () => {
  const [email, setEmail] = useState<string>("");
  const [forgotPasswordMutation] = useForgotPasswordMutation();

  const Submit = async () => {
    let data = {
      email,
      frontEndUrl: window.location.href,
    };

    console.log(data);

    try {
      await forgotPasswordMutation(data).unwrap();
      setEmail("");
    } catch (error) {
      console.log("Ошибка отправки письма:", error);
    }
  };

  return (
    <div id={scss.Forgot}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <p>Write your emai:</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="type your email"
              value={email}
            />
            <button onClick={Submit}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
