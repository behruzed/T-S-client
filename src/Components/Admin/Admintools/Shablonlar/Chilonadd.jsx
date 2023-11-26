import React from "react";
import Aside from "../../Aside";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Chilonadds from "./Chilonadds";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
const handleSubmit = () => {
  localStorage.setItem("category", category);  
  localStorage.setItem("subcategory", subcategory);
  // window.location.replace("/chilon-filter")
  props.onHide();
};
  useEffect(()=>{
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
        <Link to={"/chilon-filter"}>
        <button className="filtersubmit" onClick={() => {props.onHide(); handleSubmit()}}>
          Отправить
        </button>
        </Link>

      </Modal.Footer>
    </Modal>
  );
}

function Chilonadd() {
  const [modalShow, setModalShow] = React.useState(false);

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
            <Breadcrumb.Item active>Созданные шаблоны</Breadcrumb.Item>
          </Breadcrumb>
          <div className="d-flex justify-content-between">
            <h1 className="h11">Созданные шаблоны</h1>
          <Link to={"/chilon-filter"}>
          <button className="filter" variant="primary">
              Фильтр <i className="fa-solid fa-filter"></i>
            </button></Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </div>
          <Chilonadds />
        </div>
      </div>
    </>
  );
}

export default Chilonadd;
