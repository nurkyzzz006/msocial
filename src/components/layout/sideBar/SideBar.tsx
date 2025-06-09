"use client";
import Image from "next/image";
import scss from "./SideBar.module.scss";
import logo from "@/assets/logo-Photoroom (1).png";
import { links } from "@/constants/Links";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/api/auth";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const { data } = useGetMeQuery();
  const router = useRouter();

  return (
    <div id={scss.SideBar}>
      <div className={scss.upSide}>
        <div className={scss.logo}>
          <Image src={logo} alt="asd" width={100} height={90} />
        </div>
        <div className={scss.navi}>
          {links.map((item, index) => (
            <Link key={index} href={item.href}>
              <button>
                {item.icon}
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className={scss.userPhoto} onClick={() => router.push("/my_profil")}>
        <img src={data?.profile.photo} alt="" />
        <h5>Профиль</h5>
      </div>
    </div>
  );
};
export default SideBar;
