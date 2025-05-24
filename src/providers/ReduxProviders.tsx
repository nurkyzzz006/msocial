"use client";
import { store } from "@/redux/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
interface ILayout {
  children: ReactNode;
}

const ReduxProviders: FC<ILayout> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviders;
