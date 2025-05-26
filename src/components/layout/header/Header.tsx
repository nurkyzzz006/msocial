"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import logo from "@/assets/logo-Photoroom (1).png";
import { IoMdSearch } from "react-icons/io";
import { Links } from "@/constants/Links";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/api/auth";

const Header = () => {
  const { data } = useGetMeQuery();


  return (
    <div id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={logo} alt="asd" width={100} height={90} />
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
        </div>
      </div>
    </div>
  );
};
export default Header;
