"use client";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sideBar/SideBar";
import { usePathname } from "next/navigation";
import Register from "../pages/authentication/Register";
import { useRouter } from "next/router";

interface ILayout {
  children: ReactNode;
}

const LayoutSite: FC<ILayout> = ({ children }) => {
  const pathname = usePathname();
  // const token = JSON.parse(localStorage.getItem("token") || "");
  // const router = useRouter();


  return (
    <div className={scss.LayoutSite}>
      {pathname == "/register" || pathname == "/login" ? null : <SideBar />}

      <div className={scss.LayoutSiteContent}>
        {pathname == "/register" || pathname == "/login" ? null : <Header />}

        <main>{children}</main>
        {pathname == "/register" || pathname == "/login" ? null : <Footer />}
      </div>
    </div>
  );
};

export default LayoutSite;
