import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logochilon from '../../../images/chilon-logo.svg';
import logouno from '../../../images/uno.webp';
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

function Arizaqoshish() {
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
            <Breadcrumb.Item active>Добавить заявку</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Добавить заявку</h1>
          <div className="row rightrow text-center">
            <div className="col-6 mainimg text-center">
              <Link to="/ariza-qoshish/chilon"> {/* Link komponentini o'rniga ishlatish */}
                <div>
                  <img src={logochilon} alt="Chilon Logo" />
                </div>
              </Link>
            </div>

            <div className="col-6 mainimg">
              <Link to="/ariza-qoshish/uno"> {/* Link komponentini o'rniga ishlatish */}
                <div>
                  <img src={logouno} alt="Uno Logo" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arizaqoshish;
