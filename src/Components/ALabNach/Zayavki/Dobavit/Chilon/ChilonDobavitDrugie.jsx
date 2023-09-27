import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ChilonDobavitDr from './ChilonDobavitDr';
function ChilonDobavitDrugie() {
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
            <Breadcrumb.Item active>Другие продукты</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Другие продукты</h1>
          <ChilonDobavitDr/>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitDrugie;
