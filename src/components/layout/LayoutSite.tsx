import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sideBar/SideBar";

interface ILayout {
  children: ReactNode;
}

const LayoutSite: FC<ILayout> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <SideBar />
      <div className={scss.LayoutSiteContent}>
        <Header />
        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default LayoutSite;
