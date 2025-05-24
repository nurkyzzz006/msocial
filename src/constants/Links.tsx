import Login from "@/components/pages/authentication/Login";
import Register from "@/components/pages/authentication/Register";
import { GoHome } from "react-icons/go";
import { LuSquarePlay } from "react-icons/lu";
import { TbPhotoSquareRounded } from "react-icons/tb";

export const Links = [
  {
    title: "Home",
    href: "/",
    icon: <GoHome />,
  },
  {
    title: "Reals",
    href: "/reals",
    icon: <LuSquarePlay />,
  },
  {
    title: "Photos",
    href: "/img",
    icon: <TbPhotoSquareRounded />,
  },
  {
    href: "/register",
    element: <Register />,
  },
  {
    href: "/login",
    element: <Login />,
  },
];
