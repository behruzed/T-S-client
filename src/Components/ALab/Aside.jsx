import React from "react";
import logo from "../../images/chilon-logo.svg";
function Aside() {
  const handleLogout = () => {
    localStorage.clear();
    // foydalanuvchini qayta yo'naltirish yoki boshqa chiqish mantig'i
  }

  return (
    <>
      <div className="text-center rasm">
        <a href="/laboratoriya"><img src={logo}></img></a>
      </div>
      <div className="chapbuttons d-block">
        <a href='/laboratoriya'><button className="chapbutton">Главная</button></a>
        <a href='/arxiv'><button className="chapbutton">Архив</button></a>
        <a href='/ochiq-arizalar'><button className="chapbutton">Открытие заявки</button></a>
        <br></br>
        <a href='/'><button onClick={handleLogout} className="chapbutton hovred">Выход <i className="fa-solid fa-right-from-bracket"></i></button></a>
      </div>
    </>
  );
}

export default Aside;
