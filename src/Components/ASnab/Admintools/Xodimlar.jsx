import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Adminstudent from "../AdminStudent"
import Adminteacher from "../AdminTeacher"
function Xodimlar() {
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
            <Breadcrumb.Item active>Сотрудники</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Сотрудники</h1>

          <Adminteacher/>
          {/* <Adminstudent/> */}
        </div>
      </div>
    </>
  );
}

export default Xodimlar;
