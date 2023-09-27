import React from "react";
import Aside from "../Aside";
import logochilon from "../../../images/chilon-logo.svg";
import logouno from "../../../images/uno.webp";
import Breadcrumb from "react-bootstrap/Breadcrumb";
function Shablonlar() {
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
            <Breadcrumb.Item active>Шаблоны</Breadcrumb.Item>
          </Breadcrumb>
          <div className="row rightrow text-center">
            <div className="col-6 mainimg text-center">
            <a href="/Chilonshablon">
              <div>
                <img src={logochilon}></img>
              </div>
            </a>
            </div>

            <div className="col-6 mainimg">
            <a href="/Unoshablon">
              <div>
                <img src={logouno}></img>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shablonlar;
