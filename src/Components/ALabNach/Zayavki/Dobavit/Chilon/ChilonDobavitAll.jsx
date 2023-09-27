import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function ChilonDobavitAll() {
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
            <Breadcrumb.Item active>Чилон</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Чилон Шаблоны</h1>
          <div className="row m-3 shablonrow d-flex">
            <a className="col-12 qwa col-md-2 shabloncol" href="/ariza-qoshish/chilon/masla"><div>Масла</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/ariza-qoshish/chilon/smazki"><div>Смазки</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/ariza-qoshish/chilon/drugie"><div>Другие продукты</div></a>
            <a className="col-12 qwa col-md-2 shabloncol" href="/ariza-qoshish/chilon/obraztsi"><div>Образцы</div></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitAll;
