import { useEffect, useState } from "react";
import "../../Students/stylestudent.css";
import axios from "axios";
import React from "react";
import Aside from "../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import config from "../../../qwe/config";
import '../style.css'
function Infoo() {
  const [darkMode, setDarkMode] = useState(true);
  const [student, setStudent] = useState(false);
  const [profMod, setProfMod] = useState(false);
  const [student1, setStudent1] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const studenCl = () => {
    setStudent(!student);
  };
  const profMode = () => {
    setProfMod(!profMod);
  };
  const fetchStudent = async () => {
    let res = await axios.get(`${config.url}/students/profilest`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    if (
      res.data.message === "No authorization on this route" ||
      res.data.message === "Token is not defined" ||
      res.data.message === "Token wrong"
    ) {
      window.location.replace("/");
    }
    setStudent1(res.data.data);
  };
  const getScore = async () => {
    setStudent(!student);
    setTimeout(async () => {
      let res = await axios.get(`${config.url}/students/onescore`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      let reyting = res.data.score;
      if (
        res.data.message === "No authorization on this route" ||
        res.data.message === "Token is not defined" ||
        res.data.message === "Token wrong"
      ) {
        window.location.replace("/");
      }
      alert(`Your reyting: ${reyting}`);
    }, 1);
  };
  const logout = async () => {
    let TOKEN = "none";
    window.localStorage.setItem("token", TOKEN);
    fetchStudent();
  };

  useEffect(() => {
    fetchStudent();
  }, []);
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
            <Breadcrumb.Item active>Личный кабинет</Breadcrumb.Item>
          </Breadcrumb>
          <div className="row justify-content-center align-items-center m-5">
        <div className="col-12 infoimg text-center col-md-6">
            <img
            className="mb-3 text-center rounded-full shadow-lg"
            src="https://cdn3.iconfinder.com/data/icons/education-flat-icon-1/130/148-512.png"
            />
        </div>
        <div className="col-12 col-md-6 text-center">
            <h1 className="mb-1 text-xl mypfr">Личный кабинет</h1><br></br>
            <p className="mb-1 text-xl  text-gray-900"><strong>{student1.firstName} {student1.lastName}</strong></p>
            <p className="mb-1 text-xl  text-gray-900"><strong>Статус: </strong>{student1.status}</p>
        </div>
      </div>
      <h5 className="text-center pl-5 pr-5">
        Уважаемый пользователь, данная система работает в демонстрационном режиме. Из-за этого могут возникнуть некоторые проблемы в системе. Мобильная версия будет улучшена в следующих версиях. В дальнейшем скорость работы будет увеличена. Ошибки будут исправлены.
        </h5><br></br>
      <div className="owner text-end d-flex">

          <p>Есть ли системный сбой?</p>
          <a target="blank" href="https://t.me/behruzabdurahimovofficial">
            <button>Свяжитесь с разработчиком</button>
          </a>
      </div>
        </div>
      </div>
    </>
  );
}

export default Infoo;
