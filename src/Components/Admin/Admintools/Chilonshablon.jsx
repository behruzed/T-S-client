import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

function Chilonshablon() {
  return (
    <>
      <div className="row mainrow">
        <div className="col-0 col-md-2"></div>
        <div className="chap col-0 col-md-2">
          <Aside />
        </div>
        <div className="ong col-12 col-md-10">
          <Breadcrumb className="bread">
            <Breadcrumb.Item><Link to="/adminpanel">Главная</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/shablonlar">Шаблоны</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Чилон</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Чилон Шаблоны</h1>
          <div className="row m-3 shablonrow d-flex">
            <Link to="/chilon-moylar" className="col-12 qwa col-md-2 shabloncol"><div>Масла</div></Link>
            <Link to="/chilon-smazki" className="col-12 qwa col-md-2 shabloncol"><div>Смазки</div></Link>
            <Link to="/chilon-boshqa" className="col-12 qwa col-md-2 shabloncol"><div>Другие продукты</div></Link>
            <Link to="/chilon-namunalar" className="col-12 qwa col-md-2 shabloncol"><div>Образцы</div></Link>
            <Link to="/chilon-add" className="col-12 qwa col-md-2 shabloncol"><div><i className="fa-solid fa-plus"></i></div></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chilonshablon;
