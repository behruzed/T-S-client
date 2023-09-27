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
        <a href="/nachalnik-pr"><img src={logo}></img></a>
      </div>
      <div className="chapbuttons d-block">
        <a href='/nachalnik-pr'><button className="chapbutton">Главная</button></a>
        <a href='/arxiv'><button className="chapbutton">Архив</button></a>
        <a href='/yopiq-arizalar'><button className="chapbutton">Закрытые заявки</button></a>
        <a href='/ochiq-arizalar'><button className="chapbutton">Открытие заявки</button></a>
        <a href='/ariza-qoshish'><button className="chapbutton">Добавить заявку</button></a>
        <a href='/moylar'><button className="chapbutton">Масла</button></a>
        <a href='/surtma-moylar'><button className="chapbutton">Смазки</button></a>
        <br></br>
        <a href='/'><button onClick={handleLogout} className="chapbutton hovred">Выход <i className="fa-solid fa-right-from-bracket"></i></button></a>
      </div>
    </>
  );
}

export default Aside;
