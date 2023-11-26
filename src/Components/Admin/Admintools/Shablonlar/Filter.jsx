import React from "react";
import axios from "axios";
import config from "../../../../qwe/config";
import Aside from "../../Aside";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props, data, th, spTeacherFunc, spTeacher) {
  const [malumot, setMalumot] = useState("");

  const getName1 = async (e, id) => {
    let data1 = await axios.get(
      `${config.url}/pos/?parent=${window.localStorage.getItem("nom")}`, 
      {
        headers: {
          authorization: window.localStorage.getItem("token")  
        }
      }
    );
    let data2 = await axios.get(
      `${config.url}/filter/?category=${window.localStorage.getItem("category")}&subcategory=${window.localStorage.getItem("subcategory")}`,
      {
        headers: {
          authorization: window.localStorage.getItem("token")
        }
      }
    );
    setMalumot(data2.data.data);
  }

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const handleSubmit = () => {
    localStorage.setItem("category", category);  
    localStorage.setItem("subcategory", subcategory);
    props.onHide();
};
useEffect(()=>{
})
useEffect(()=>{
  getName1()
})
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="filterx" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Фильтр
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="w-full text-center">
      <select
  id="simple-search"
  className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
  aria-label=".form-select-lg example"
  required=""
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
                      <option value="" disabled>
                        Выбрать...
                      </option>
                      <option value="Масла">Масла</option>
                      <option value="Смазки">Смазки</option>
                      <option value="Другие продукты">Другие продукты</option>
                      <option value="Образцы">Образцы</option>
                    </select>

                    <select
  id="simple-search"
  className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
  aria-label=".form-select-lg example"
  required=""
  value={subcategory}
  onChange={(e) => {
    if(e.target.value === "") {
      alert("Пожалуйста, выберите другой вариант");
      return;
    }
    setSubcategory(e.target.value);
  }}>

                      {category === "Масла" && (
                        <>
                        <option value="">
                        Выбрать...
                      </option>
                          <option
                            className="soption soptionmoy"
                            value="Авиационные масла"
                          >
                            Авиационные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Гидравлические масла"
                          >
                            Гидравлические масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Компрессорные масла"
                          >
                            Компрессорные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Моторные масла"
                          >
                            Моторные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Редукторные масла"
                          >
                            Редукторные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Трансмиссионные масла"
                          >
                            Трансмиссионные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Трансформаторные масла"
                          >
                            Трансформаторные масла
                          </option>
                          <option
                            className="soption soptionmoy"
                            value="Турбинные масла"
                          >
                            Турбинные масла
                          </option>
                        </>
                      )}

                      {category === "Смазки" && (
                        <>
                        <option value="">
                        Выбрать...
                      </option>
                          <option
                            className="soption soptionsmazki"
                            value="Железнодорожные смазки"
                          >
                            Железнодорожные смазки
                          </option>
                          <option
                            className="soption soptionsmazki"
                            value="Смазки общего назначения"
                          >
                            Смазки общего назначения
                          </option>
                          <option
                            className="soption soptionsmazki"
                            value="Спец. смазки"
                          >
                            Спец. смазки
                          </option>
                        </>
                      )}

                      {category === "Другие продукты" && (
                        <>
                        <option value="">
                        Выбрать...
                      </option>
                          <option
                            value="Другие продукты"
                            className="soptionboshqa"
                          >
                            Другие продукты
                          </option>
                        </>
                      )}

                      {category === "Образцы" && (
                        <>
                        <option value="">
                        Выбрать...
                      </option>
                          <option value="Образцы" className="soptionnamuna">
                            Образцы
                          </option>
                        </>
                      )}
                    </select>
                  </div>

      </Modal.Body>
      <Modal.Footer>
        <button className="filtersubmit" onClick={() => {props.onHide(); handleSubmit(); getName1()}}>
          Отправить
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function Filter({data, th, spTeacherFunc, spTeacher}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [malumot, setMalumot] = useState("");

  const getName1 = async (e, id) => {
    let data1 = await axios.get(
      `${config.url}/pos/?parent=${window.localStorage.getItem("nom")}`, 
      {
        headers: {
          authorization: window.localStorage.getItem("token")  
        }
      }
    );
    let data2 = await axios.get(
      `${config.url}/filter/?category=${window.localStorage.getItem("category")}&subcategory=${window.localStorage.getItem("subcategory")}`,
      {
        headers: {
          authorization: window.localStorage.getItem("token")
        }
      }
    );
    setMalumot(data2.data.data);
  }

  useEffect(()=>{
    getName1()
  })



  return (
    <>
      <div className="row mainrow">
        <div className="col-0 col-md-2"></div>
        <div className="chap col-0 col-md-2">
          <Aside />
        </div>
        <div className="ong col-12 col-md-10">
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/adminpanel">Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/shablonlar">Шаблоны</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/chilonshablon">Чилон</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/chilon-add">Созданные шаблоны</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Фильтр</Breadcrumb.Item>
          </Breadcrumb>
          <div className="d-flex justify-content-between">
            <h1 className="h11">Фильтр</h1>
            <button className="filter" variant="primary" onClick={() => setModalShow(true)}>
            Фильтр <i className="fa-solid fa-filter"></i>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </div>
          <Filters malumot={malumot}/>
        </div>
      </div>
    </>
  );
}
export default Filter;
