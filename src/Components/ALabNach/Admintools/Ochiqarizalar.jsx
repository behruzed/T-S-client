import React from "react";
import Aside from "../Aside";
import Oddiy from "./Oddiy"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Ochiqarizalar() {
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
            <Breadcrumb.Item active>Открытие заявки</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Открытие заявки</h1>
          <Oddiy />
        </div>
      </div>
    </>
  );
}

export default Ochiqarizalar;