"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sideBar/SideBar";
import { usePathname, useRouter } from "next/navigation";

interface ILayout {
  children: ReactNode;
}

const LayoutSite: FC<ILayout> = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const publicPaths = ["/login", "/register"];

    if (!token && !publicPaths.includes(pathName)) {
      router.push("/login");
    } else if (token && publicPaths.includes(pathName)) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [pathName, router]);

  if (isLoading) return null;

  const isAuth =
    pathName !== "/login" &&
    pathName !== "/register" &&
    pathName !== "/auth/forgot";
  pathName !== "/auth/reset-pawssord";

  return (
    <div className={scss.LayoutSite}>
      {isAuth && <SideBar />}

      <div className={scss.LayoutSiteContent}>
        {isAuth && <Header />}
        <main>{children}</main>
        {isAuth && <Footer />}
      </div>
    </div>
  );
};

export default LayoutSite;
