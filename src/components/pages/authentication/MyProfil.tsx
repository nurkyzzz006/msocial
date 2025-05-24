import scss from "./MyProfil.module.scss";
const MyProfil = () => {
  return (
    <div id={scss.MyProfil}>
      <div className="container">
        <div className={scss.content}>MyProfil</div>
      </div>
    </div>
  );
};
export default MyProfil;
