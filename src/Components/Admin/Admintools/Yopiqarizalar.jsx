import React from "react";
import Aside from "../Aside";
import OddiyZ from "./OddiyZ"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link } from 'react-router-dom'
function Yopiqarizalar() {
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
            <Breadcrumb.Item active>Закрытые заявки</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Закрытые заявки</h1>
          <OddiyZ/>
        </div>
      </div>
    </>
  );
}

export default Yopiqarizalar;
