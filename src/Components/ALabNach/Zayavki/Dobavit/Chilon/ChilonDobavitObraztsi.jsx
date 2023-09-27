import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ChilonDobavitOb from './ChilonDobavitOb'
function ChilonDobavitObraztsi() {
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
            <Breadcrumb.Item href="/ariza-qoshish">Добавить заявку</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish/chilon">Чилон</Breadcrumb.Item>
            <Breadcrumb.Item active>Образцы</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Образцы</h1>
          <ChilonDobavitOb/>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitObraztsi;
