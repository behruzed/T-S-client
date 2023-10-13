import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'; // Link komponentini o'rnating

function ChilonDobavitMasla() {
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
            <Breadcrumb.Item><Link to={"/ariza-qoshish/chilon"}>Чилон</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Масла</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Масла</h1>
          <ul className="moyul">
            <Link to="/ariza-qoshish/chilon/masla/aviatsion"><li className="moyli moylidiz">Авиационные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/gidravlik"><li className="moyli moylidiz">Гидравлические масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/kompressor"><li className="moyli moylidiz">Компрессорные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/motor"><li className="moyli moylidiz">Моторные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/reduktor"><li className="moyli moylidiz">Редукторные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/transformator"><li className="moyli moylidiz">Трансформаторные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/transmission"><li className="moyli moylidiz">Трансмиссионные масла</li></Link>
            <Link to="/ariza-qoshish/chilon/masla/trubina"><li className="moyli moylidiz">Турбинные масла</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitMasla;
