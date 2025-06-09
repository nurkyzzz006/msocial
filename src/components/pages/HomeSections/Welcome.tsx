"use client";
import { useGetPostQuery } from "@/redux/api/posts";
import scss from "./Welcome.module.scss";
const Welcome = () => {
  const { data } = useGetPostQuery();

  return (
    <div id={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>Welcome</div>
      </div>
    </div>
  );
};
export default Welcome;
