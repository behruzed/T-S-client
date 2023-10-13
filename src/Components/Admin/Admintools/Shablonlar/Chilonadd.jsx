import React from "react";
import Aside from "../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Chilonadds from './Chilonadds';
import {Link} from "react-router-dom";
function Chilonadd() {
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
            <Breadcrumb.Item active>Созданные шаблоны</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Созданные шаблоны</h1>
          <Chilonadds/>
        </div>
      </div>
    </>
  );
}

export default Chilonadd;
