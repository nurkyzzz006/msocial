"use client";
import { useState } from "react";
import scss from "./Modal.module.scss";
import { useRouter } from "next/navigation";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const router = useRouter();
  const handleLog = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={scss.Modal} onClick={onClose}>
      <div className={scss.content} onClick={(e) => e.stopPropagation()}>
        <div className={scss.block}>
          <p onClick={onClose}>Отмена</p>
          <p onClick={()=>router.push("/auth/forgot")}>Изменить пороль</p>
          <p>Добавить рекламу</p>
          <p onClick={handleLog}>Выйти из аккаунта</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
