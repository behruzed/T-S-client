import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Ombor() {
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
            <Breadcrumb.Item active>Склад</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Склад</h1>
          <h2 className="h10 text-center">Его нельзя использовать временно</h2>

        </div>
      </div>
    </>
  );
}

export default Ombor;
