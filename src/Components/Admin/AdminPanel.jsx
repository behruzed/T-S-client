import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import config from "../../qwe/config";
import logochilon from "../../images/chilon-logo.svg";
import logouno from "../../images/uno.webp";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Aside from "./Aside";
import { Link } from "react-router-dom"; // React Router kutubxonasidan Link komponentini import qiling

function AdminPanel() {
  const [darkMode, setDarkMode] = useState(true);
  const [student1, setStudent1] = useState(null);

  const admin = async () => {
    let data = await axios(`${config.url}/teachers`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    if (
      data.data.message === "No authorization on this route" ||
      data.data.message === "Token is not defined" ||
      data.data.message === "Token wrong"
    ) {
      window.location.replace("/");
    }
  };

  useEffect(() => {
    admin();
    fetchTecher();
  }, []);

  const fetchTecher = async () => {
    let res = await axios.get(`${config.url}/teachers`, {
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
    } else if (res.data.data.length > 0) {
      setStudent1(res.data.data[0]);
    }
  };

  return (
    <>
      <div className="row mainrow">
        <div className="col-0 bg-dark col-md-2">a</div>
        <div className="chap col-0 col-md-2">
          <Aside />
        </div>
        <div className="ong col-12 col-md-10">
          <Breadcrumb className="bread">
            <Breadcrumb.Item active>Главная</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Панель администратора</h1>
          <div className="row rightrow text-center">
            <div className="col-6 mainimg text-center">
              <Link to="/Chilonshablon"> {/* Link komponentini o'rniga ishlatish */}
                <div>
                  <img src={logochilon} alt="Chilon Logo" />
                </div>
              </Link>
            </div>

            <div className="col-6 mainimg">
              <Link to="/Unoshablon"> {/* Link komponentini o'rniga ishlatish */}
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

export default AdminPanel;
