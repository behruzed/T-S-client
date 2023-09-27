import React from "react";
import Aside from "../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Chilonsmazki() {
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
            <Breadcrumb.Item active>Смазки</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Смазки</h1>
          <ul className="moyul">
            <a href="/chilon-smazki-jeleznodorojniy"><li className="moyli moylidiz">Железнодорожные смазки</li></a>
            <a href="/chilon-smazki-obshego"><li className="moyli moylidiz">Смазки общего назначения</li></a>
            <a href="/chilon-smazki-spets"><li className="moyli moylidiz">Спец. смазки</li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chilonsmazki;
