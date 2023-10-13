import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom'
function Unoshablon() {
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
            <Breadcrumb.Item active>Уно</Breadcrumb.Item>
          </Breadcrumb>
        
        <div className="row">
            <h1 className="h11">Уно Шаблоны</h1>
            <h2 className="h10 text-center">Скоро...</h2>
        </div>
        </div>
      </div>
    </>
  );
}

export default Unoshablon