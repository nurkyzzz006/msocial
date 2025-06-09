import Login from "@/components/pages/authentication/Login";
import Register from "@/components/pages/authentication/Register";
import { GoHome } from "react-icons/go";
import { LuSquarePlay } from "react-icons/lu";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoCompassOutline } from "react-icons/io5";
import MyProfil from "@/components/pages/authentication/MyProfil";

export const Links = [
  {
    title: "Home",
    href: "/",
    icon: <GoHome />,
  },
  {
    title: "Reels",
    href: "/reals",
    icon: <LuSquarePlay />,
  },
  {
    title: "Photos",
    href: "/img",
    icon: <TbPhotoSquareRounded />,
  },
  {
    href: "/search",
    icon: <FiSearch />,
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

export const links = [
  {
    title: "Главгая",
    href: "/",
    icon: <GoHome />,
  },
  {
    title: "Reels",
    href: "/reals",
    icon: <LuSquarePlay />,
  },
  {
    title: "Изображения",
    href: "/img",
    icon: <TbPhotoSquareRounded />,
  },
  {
    title: "Интересное",
    href: "/interesting",
    icon: <IoCompassOutline />,
  },
];
