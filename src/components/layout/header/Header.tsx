"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import logo from "@/assets/logo-Photoroom (1).png";
import { IoMdSearch } from "react-icons/io";
import { Links } from "@/constants/Links";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/api/auth";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [logout, setLogout] = useState<boolean>(false);
  const { data } = useGetMeQuery();
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/my_profil") return null;
  const handleLog = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.search}>
            <input type="text" placeholder="Search...?" />
            <IoMdSearch />
          </div>
          <div className={scss.nav}>
            {Links.map((link, ind) => (
              <Link href={link.href} key={ind}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className={scss.userPhoto}>
            <h4>{data?.profile.username}</h4>
            <img
              onClick={() => setLogout(!logout)}
              src={data?.profile.photo}
              alt=""
            />
            {logout && (
              <button
                className={scss.logout_btn}
                onClick={() => {
                  handleLog();
                  router.push("/login");
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
