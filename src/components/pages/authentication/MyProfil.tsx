"use client";
import { useState } from "react";
import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./MyProfil.module.scss";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import Modal from "@/components/modal/Modal";

const MyProfil = () => {
  const { data } = useGetMeQuery();
  const [isModalOpen, setIsModalOpen] = useState(false); // ← состояние для модалки

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id={scss.MyProfil}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.up_side}>
            <div className={scss.prof}>
              <img src={data?.profile.photo} alt="" />
            </div>
            <div className={scss.followers}>
              <div className={scss.first_line}>
                <h5>{data?.profile.username}</h5>
                <button>Редактировать профиль</button>
                <button>Посмотреть архив</button>
                <IoMdSettings
                  className={scss.setting}
                  onClick={toggleModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={scss.second_line}>
                <p>
                  <span>12</span> публикаций
                </p>
                <p>
                  <span>12</span> подписчики
                </p>
                <p>
                  <span>12</span> подписок
                </p>
              </div>
              <div className={scss.three_line}>
                <p>NN</p>
                <p>💕😎😎😎</p>
                <Link href="/telegramm">t.me/+VO7qeeFODjU4NmRi</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.modal}>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </div>
    </div>
  );
};

export default MyProfil;
