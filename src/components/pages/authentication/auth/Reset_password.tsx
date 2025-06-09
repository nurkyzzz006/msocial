"use client";
import { useState } from "react";
import scss from "./Reset_password.module.scss";
import { useResetPasswordMutation } from "@/redux/api/auth";
import { useSearchParams } from "next/navigation";

const Reset_password = () => {
  const [newPassword, setNewPassword] = useState("");
  const [resetPasswordMutation] = useResetPasswordMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  // const onSubmit = async () => {
  //   const obj = {
  //     token: String(token),
  //     newPassword,
  //   };
  //   try {
  //     await resetPasswordMutation(obj).unwrap();
  //     setNewPassword("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmit = async () => {
    const token = searchParams.get("token");

    if (!token) {
      alert("Токен не найден в URL");
      return;
    }

    if (!newPassword.trim()) {
      alert("Введите новый пароль");
      return;
    }

    const obj = {
      token: String(token),
      newPassword,
    };

    try {
      const result = await resetPasswordMutation(obj);

      // Проверяем успешность операции
      if ("data" in result) {
        alert("Пароль успешно изменен!");
        setNewPassword("");
      } else if ("error" in result) {
        console.error("Ошибка при сбросе пароля:", result.error);
        alert("Ошибка при изменении пароля");
      }
    } catch (e) {
      console.error("Ошибка:", e);
      alert("Произошла ошибка при изменении пароля");
    }
  };

  return (
    <div id={scss.Reset_password}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <input
              type="text"
              placeholder="new Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={() => onSubmit()}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reset_password;
