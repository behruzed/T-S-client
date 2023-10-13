import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/chilon-logo.svg";
import { Offcanvas, Button } from 'react-bootstrap'; // Offcanvas va Button komponentlarini import qiling

function Aside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.clear();
  }

  return (
    <>
      <div className="mbmenu">
      <Button className='offcbtn' variant="primary" onClick={handleShow}>
      <i class="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="mbmenu2">
          <Offcanvas.Title>{window.localStorage.getItem("person")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="chapbuttons2 d-block">
        <Link to='/adminpanel'><button className="chapbutton">Главная</button></Link>
        <Link to='/arxiv'><button className="chapbutton">Архив</button></Link>
        <Link to='/yopiq-arizalar'><button className="chapbutton">Закрытые заявки</button></Link>
        <Link to='/ochiq-arizalar'><button className="chapbutton">Открытие заявки</button></Link>
        <Link to='/ariza-qoshish'><button className="chapbutton">Добавить заявку</button></Link>
        <Link to='/moylar'><button className="chapbutton">Масла</button></Link>
        <Link to='/surtma-moylar'><button className="chapbutton">Смазки</button></Link>
        <Link to='/shablonlar'><button className="chapbutton">Шаблоны</button></Link>
        <Link to='/ombor'><button className="chapbutton">Склад</button></Link>
        <Link to='/xodimlar'><button className="chapbutton">Сотрудники</button></Link>
        <Link to='/info'><button className="chapbutton">Личный кабинет</button></Link>
        <br />
        <Link to='/'><button onClick={handleLogout} className="chapbutton hovred2">Выход <i className="fa-solid fa-right-from-bracket"></i></button></Link>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

      <div className="glmenu">
        <div className="text-center rasm">
          <Link to="/adminpanel"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="chapbuttons d-block">
          <Link to='/adminpanel'><button className="chapbutton">Главная</button></Link>
          <Link to='/arxiv'><button className="chapbutton">Архив</button></Link>
          <Link to='/yopiq-arizalar'><button className="chapbutton">Закрытые заявки</button></Link>
          <Link to='/ochiq-arizalar'><button className="chapbutton">Открытие заявки</button></Link>
          <Link to='/ariza-qoshish'><button className="chapbutton">Добавить заявку</button></Link>
          <Link to='/moylar'><button className="chapbutton">Масла</button></Link>
          <Link to='/surtma-moylar'><button className="chapbutton">Смазки</button></Link>
          <Link to='/shablonlar'><button className="chapbutton">Шаблоны</button></Link>
          <Link to='/ombor'><button className="chapbutton">Склад</button></Link>
          <Link to='/xodimlar'><button className="chapbutton">Сотрудники</button></Link>
          <Link to='/info'><button className="chapbutton">Личный кабинет</button></Link>
          <br />
          <Link to='/'><button onClick={handleLogout} className="chapbutton hovred">Выход <i className="fa-solid fa-right-from-bracket"></i></button></Link>
        </div>
      </div>
    </>
  );
}

export default Aside;
