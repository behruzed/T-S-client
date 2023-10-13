import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

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
          <Breadcrumb.Item><Link to={"/adminpanel"}>Главная</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to={"/ariza-qoshish"}>Добавить заявку</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Чилон</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Чилон Шаблоны</h1>
          <div className="row m-3 shablonrow d-flex">
            <Link to="/ariza-qoshish/chilon/masla" className="col-12 qwa col-md-2 shabloncol"><div>Масла</div></Link>
            <Link to="/ariza-qoshish/chilon/smazki" className="col-12 qwa col-md-2 shabloncol"><div>Смазки</div></Link>
            <Link to="/ariza-qoshish/chilon/drugie" className="col-12 qwa col-md-2 shabloncol"><div>Другие продукты</div></Link>
            <Link to="/ariza-qoshish/chilon/obraztsi" className="col-12 qwa col-md-2 shabloncol"><div>Образцы</div></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitAll;
