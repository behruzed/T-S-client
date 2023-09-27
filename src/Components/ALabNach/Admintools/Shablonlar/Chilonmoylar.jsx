import React from "react";
import Aside from "../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Chilonadds from './Chilonadds'
function Chilonmoylar() {
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
            <Breadcrumb.Item href="/shablonlar">Шаблоны</Breadcrumb.Item>
            <Breadcrumb.Item href="/chilonshablon">Чилон</Breadcrumb.Item>
            <Breadcrumb.Item active>Масла</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Масла</h1>
          <ul className="moyul">
            <a href="/chilon-moy-aviatsion"><li className="moyli moylidiz">Авиационные масла</li></a>
            <a href="/chilon-moy-gidravlik"><li className="moyli moylidiz">Гидравлические масла</li></a>
            <a href="/chilon-moy-kompressor"><li className="moyli moylidiz">Компрессорные масла</li></a>
            <a href="/chilon-moy-motor"><li className="moyli moylidiz">Моторные масла</li></a>
            <a href="/chilon-moy-reduktor"><li className="moyli moylidiz">Редукторные масла</li></a>
            <a href="/chilon-moy-transmission"><li className="moyli moylidiz">Трансмиссионные масла</li></a>
            <a href="/chilon-moy-transformator"><li className="moyli moylidiz">Трансформаторные масла</li></a>
            <a href="/chilon-moy-trubina"><li className="moyli moylidiz">Турбинные масла</li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chilonmoylar;
