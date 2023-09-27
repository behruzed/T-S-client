import React from "react";
import Aside from "../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Drugie from './Drugie/Drugie';
function Chilonboshqa() {
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
            <Breadcrumb.Item href="/chilonshablon">Чилон</Breadcrumb.Item>
            <Breadcrumb.Item active>Другие продукты</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Другие продукты</h1>
          <Drugie/>
        </div>
      </div>
    </>
  );
}

export default Chilonboshqa;
