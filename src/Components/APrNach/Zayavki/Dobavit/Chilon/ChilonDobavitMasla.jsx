import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Chilonadds from './Chilonadds'
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
            <Breadcrumb.Item href="/adminpanel">Главная</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish">Добавить заявку</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish/chilon">Чилон</Breadcrumb.Item>
            <Breadcrumb.Item active>Масла</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Масла</h1>
          <ul className="moyul">
            <a href="/ariza-qoshish/chilon/masla/aviatsion"><li className="moyli moylidiz">Авиационные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/gidravlik"><li className="moyli moylidiz">Гидравлические масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/kompressor"><li className="moyli moylidiz">Компрессорные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/motor"><li className="moyli moylidiz">Моторные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/reduktor"><li className="moyli moylidiz">Редукторные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/transformator"><li className="moyli moylidiz">Трансформаторные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/transmission"><li className="moyli moylidiz">Трансмиссионные масла</li></a>
            <a href="/ariza-qoshish/chilon/masla/trubina"><li className="moyli moylidiz">Турбинные масла</li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChilonDobavitMasla;
