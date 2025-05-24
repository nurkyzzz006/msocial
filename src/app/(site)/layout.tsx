import LayoutSite from "@/components/layout/LayoutSite";
import ReduxProviders from "@/providers/ReduxProviders";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return (
    <ReduxProviders>
      <LayoutSite>{children}</LayoutSite>;
    </ReduxProviders>
  );
};

export default layout;
