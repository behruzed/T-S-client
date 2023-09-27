import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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
            <Breadcrumb.Item href="/adminpanel">Главная</Breadcrumb.Item>
            <Breadcrumb.Item href="/shablonlar">Шаблоны</Breadcrumb.Item>
            <Breadcrumb.Item active>Чилон</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Чилон Шаблоны</h1>
          <div className="row m-3 shablonrow d-flex">
            <a className="col-12 qwa col-md-2 shabloncol" href="/chilon-moylar"><div>Масла</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/chilon-smazki"><div>Смазки</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/chilon-boshqa"><div>Другие продукты</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/chilon-namunalar"><div>Образцы</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/chilon-add"><div><i className="fa-solid fa-plus"></i></div></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chilonshablon;
