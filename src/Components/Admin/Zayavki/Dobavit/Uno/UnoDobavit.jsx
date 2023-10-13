import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

function UnoDobavit() {
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
            <Breadcrumb.Item active>Уно</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Уно Шаблоны</h1>
                <h1 className="h11 text-center">Скоро...</h1>
        </div>
      </div>
    </>
  );
}

export default UnoDobavit;
