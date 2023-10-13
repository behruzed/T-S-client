import React from "react";
import Aside from "../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

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
          <Breadcrumb.Item><Link to="/adminpanel">Главная</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/shablonlar">Шаблоны</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/chilonshablon">Чилон</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Смазки</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Смазки</h1>
          <ul className="moyul">
            <Link to="/chilon-smazki-jeleznodorojniy"><li className="moyli moylidiz">Железнодорожные смазки</li></Link>
            <Link to="/chilon-smazki-obshego"><li className="moyli moylidiz">Смазки общего назначения</li></Link>
            <Link to="/chilon-smazki-spets"><li className="moyli moylidiz">Спец. смазки</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chilonsmazki;
