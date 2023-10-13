import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'; // Link komponentini o'rnating
import '../../../style.css';

function ChilonDobavitSmazki() {
  return (
    <>
      <div className="row mainrow">
        <div className="col-0 col-md-2"></div>
        <div className="chap col-0 col-md-2">
          <Aside />
        </div>
        <div className="ong col-12 col-md-10">
          <Breadcrumb className="bread">
          <Breadcrumb.Item><Link to={"/adminpanel"}>Главная</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={"/ariza-qoshish"}>Добавить заявку</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={"/ariza-qoshish/chilon"}>Чилон</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Смазки</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Смазки</h1>
          <ul className="moyul">
            <Link to="/ariza-qoshish/chilon/smazki/jeleznodorojniy"><li className="moyli moylidiz">Железнодорожные смазки</li></Link>
            <Link to="/ariza-qoshish/chilon/smazki/obshego"><li className="moyli moylidiz">Смазки общего назначения</li></Link>
            <Link to="/ariza-qoshish/chilon/smazki/spets"><li className="moyli moylidiz">Спец. смазки</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitSmazki;
