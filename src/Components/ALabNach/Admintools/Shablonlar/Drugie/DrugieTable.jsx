import axios from "axios";
import { useRef, useState } from "react";
import config from "../../../../../qwe/config"
import Chilonpos from "../Chilonpos";
import "../../../style.css";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
export default ({ data, th, spTeacherFunc, spTeacher }) => {
  const getName1 = async (e, id) => {
    let qwe = await spTeacherFunc(id)
    window.localStorage.setItem("nom", qwe._id);

    let data1 = await axios.get(`${config.url}/pos/?parent=${window.localStorage.getItem("nom")}`,
      {
        headers: {
          authorization: window.localStorage.getItem("token")
        }
      });
    prof1()
  };
  const [edit, setEdit] = useState(false);
  const [prof, setProf] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [backdropp, setBackdropp] = useState(false);
  const [teacherId, setTecherId] = useState("");
  // const nameInputRef = useRef(null);

  // const getName = () => {
  //   return nameInputRef.current.value;
  // }
  // const updateName = () => {
  //   // Yangi name ni oling
  //   const newName = getName();

  //   // Elementning name ini yangilang
  //   element.name = newName;
  // }
  // setProf(true);

  // setEdit(true);

  let inp1 = useRef(null);
  let inp2 = useRef(null);
  let inp3 = useRef(null);
  let inp4 = useRef(null);
  let inp5 = useRef(null);
  let inp6 = useRef(null);
  let inp7 = useRef(null);
  let inp8 = useRef(null);
  let inp9 = useRef(null);
  let inp10 = useRef(null);
  let inp11 = useRef(null);
  let inp12 = useRef(null);
  let inp13 = useRef(null);
  let inp14 = useRef(null);
  let inp15 = useRef(null);
  let inp16 = useRef(null);
  let inp17 = useRef(null);
  let inp18 = useRef(null);
  let inp19 = useRef(null);
  let inp20 = useRef(null);
  let inp21 = useRef(null);
  let inp22 = useRef(null);
  let inp23 = useRef(null);
  let inp24 = useRef(null);
  let inp25 = useRef(null);
  let inp26 = useRef(null);

  const gcv = (inp) => {
    return inp.current.value;
  };
  const backdrop1 = () => {
    setBackdrop(!backdrop);
  };
  const backdrop2 = () => {
    setBackdropp(!backdropp);
  };
  const edit1 = () => {
    setEdit(!edit);
  };
  const prof1 = () => {
    setProf(!prof);
  };
  const getId = (id) => {
    setTecherId(id);
  };
  const setTeacherId = (id) => {
    window.localStorage.setItem("teacherId", id);
  };

  const editTeacher = async () => {
    let data = {
      firstName: gcv(inp1).length === 0 ? undefined : gcv(inp1),
      lastName: gcv(inp2).length === 0 ? undefined : gcv(inp2),
      email: gcv(inp3).length === 0 ? undefined : gcv(inp3),
      subject: gcv(inp4).length === 0 ? undefined : gcv(inp4),
      status: inp5.current.value.length === 0 ? undefined : inp5.current.value,
      password: gcv(inp6).length === 0 ? undefined : gcv(inp6),
      name: gcv(inp7).length === 0 ? undefined : gcv(inp7),
      nameId: gcv(inp8).length === 0 ? undefined : gcv(inp8),
      norma: gcv(inp9).length === 0 ? undefined : gcv(inp9),
      type: gcv(inp10).length === 0 ? undefined : gcv(inp10),
      group: gcv(inp11).length === 0 ? undefined : gcv(inp11),
      partiyaName: gcv(inp12).length === 0 ? undefined : gcv(inp12),
      partiyaNameFolder: gcv(inp13).length === 0 ? undefined : gcv(inp13),
      commentByOpener: gcv(inp14).length === 0 ? undefined : gcv(inp14),
      commentByCloser: gcv(inp15).length === 0 ? undefined : gcv(inp15),
      commentByArchiver: gcv(inp16).length === 0 ? undefined : gcv(inp16),
      openedBy: gcv(inp17).length === 0 ? undefined : gcv(inp17),
      openedData: gcv(inp18).length === 0 ? undefined : gcv(inp18),
      closedBy: gcv(inp19).length === 0 ? undefined : gcv(inp19),
      closedData: gcv(inp20).length === 0 ? undefined : gcv(inp20),
      archivedBy: gcv(inp21).length === 0 ? undefined : gcv(inp21),
      archivedData: gcv(inp22).length === 0 ? undefined : gcv(inp22),
      company: gcv(inp23).length === 0 ? undefined : gcv(inp23),
      position1: gcv(inp24).length === 0 ? undefined : gcv(inp24),
      position2: gcv(inp25).length === 0 ? undefined : gcv(inp25),
      parent: gcv(inp26).length === 0 ? undefined : gcv(inp26),
    };
    let res = await axios.put(`${config.url}/Drugie/${teacherId}`, data, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    window.location.reload();
    // edit1()
    if (res.data.title === "Информация о продукте была изменена✅") {
      alert(res.data.title);
    }

    inp1.current.value = "";
    inp2.current.value = "";
    inp3.current.value = "";
    inp4.current.value = "";
    inp5.current.value = "";
    inp6.current.value = "";
    inp7.current.value = "";
    inp8.current.value = "";
    inp9.current.value = "";
    inp10.current.value = "";
    inp11.current.value = "";
    inp12.current.value = "";
    inp13.current.value = "";
    inp14.current.value = "";
    inp15.current.value = "";
    inp16.current.value = "";
    inp17.current.value = "";
    inp18.current.value = "";
    inp19.current.value = "";
    inp20.current.value = "";
    inp21.current.value = "";
    inp22.current.value = "";
    inp23.current.value = "";
    inp24.current.value = "";
    inp25.current.value = "";
    inp26.current.value = "";
  };
  const delTeacher = async (id) => {
    let res = await axios.delete(`${config.url}/Drugie/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    if (res.data.title === "Продукт был удален❌") {
      alert(res.data.title);
    }
    window.location.reload();
    // backdrop2()

  };
  const addTeacher = async () => {
    if (
      gcv(inp1) &&
      gcv(inp2) &&
      gcv(inp3) &&
      gcv(inp4) &&
      gcv(inp5) &&
      gcv(inp6) &&
      gcv(inp7) &&
      gcv(inp8) &&
      gcv(inp9) &&
      gcv(inp10) &&
      gcv(inp11) &&
      gcv(inp12) &&
      gcv(inp13) &&
      gcv(inp14) &&
      gcv(inp15) &&
      gcv(inp16) &&
      gcv(inp17) &&
      gcv(inp18) &&
      gcv(inp19) &&
      gcv(inp20) &&
      gcv(inp21) &&
      gcv(inp22) &&
      gcv(inp23) &&
      gcv(inp24) &&
      gcv(inp25) &&
      gcv(inp26)
    ) {
      let data = {
        firstName: gcv(inp1),
        lastName: gcv(inp2),
        email: gcv(inp3),
        subject: gcv(inp4),
        status: inp5.current.value,
        password: gcv(inp6),
        name: gcv(inp7),
        nameId: gcv(inp8),
        norma: gcv(inp9),
        type: gcv(inp10),
        group: gcv(inp11),
        partiyaName: gcv(inp12),
        partiyaNameFolder: gcv(inp13),
        commentByOpener: gcv(inp14),
        commentByCloser: gcv(inp15),
        commentByArchiver: gcv(inp16),
        openedBy: gcv(inp17),
        openedData: gcv(inp18),
        closedBy: gcv(inp19),
        closedData: gcv(inp20),
        archivedBy: gcv(inp21),
        archivedData: gcv(inp22),
        company: gcv(inp23),
        position1: gcv(inp24),
        position2: gcv(inp25),
        parent: gcv(inp26),
      };
      let res = await axios.post(`${config.url}/Drugie`, data, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      // window.location.reload();
      backdrop2()
      // backdrop2()

      if (res.data.title === "Продукт добавлен в систему✅") {
        alert(res.data.title);
      }

      inp1.current.value = "";
      inp2.current.value = "";
      inp3.current.value = "";
      inp4.current.value = "";
      inp5.current.value = "";
      inp6.current.value = "";
      inp7.current.value = "";
      inp8.current.value = "";
      inp9.current.value = "";
      inp10.current.value = "";
      inp11.current.value = "";
      inp12.current.value = "";
      inp13.current.value = "";
      inp14.current.value = "";
      inp15.current.value = "";
      inp16.current.value = "";
      inp17.current.value = "";
      inp18.current.value = "";
      inp19.current.value = "";
      inp20.current.value = "";
      inp21.current.value = "";
      inp22.current.value = "";
      inp23.current.value = "";
      inp24.current.value = "";
      inp25.current.value = "";
      inp26.current.value = "";
    } else {
      alert("Barcha maydonlarni to`ldiring...");
    }
  };
  const [category, setCategory] = useState("");

  return (
    <>
      <h1 className="h10">Все продукты</h1>

      <table className="table w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 text-gray-400 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              №
            </th>
            {th.map((item, i) => {
              return (
                <th key={i} scope="col">
                  {item}
                </th>
              );
            })}
            <th scope="col" className="px-6 py-3 text-right w-32">
              <span className="sr-only">Close modal</span>
            </th>
          </tr>
        </thead>
        <tbody className="wer">
          {data.map((item, i) => {
            return (
              <tr
                key={item._id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-10 dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.group}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.norma}</td>
                <td className="px-6 py-4">{item.nameId}</td>
                <td className="px-6 py-4 pluss2 text-right w-52">
                <a
                    // onClick={prof1}
                    // onClickCapture={() => {
                    //   spTeacherFunc(item._id);
                    // }}
                    onClick={(e) => {
                      getName1(e, item._id)
                    }}
                    data-modal-target="profile-modal"
                    data-modal-toggle="profile-modal"
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i class="fa-solid fa-list"></i>
                  </a>
                  
                  <a
                    onClick={edit1}
                    onClickCapture={() => {
                      getId(item._id);
                    }}
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    href="#"
                    className="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </a>

                  <a
                    onClick={() => {
                      delTeacher(item._id);
                    }}
                    href="#"
                    className="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {edit && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-5/12 max-h-full">
            <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={edit1}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="w-full px-6 py-6 lg:px-8 flex flex-col">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Изменить информацию o продукте
                </h3>
                <form className="items-center gap-16 mb-5">
                  <label htmlFor="simple-search" className="sr-only">
                    Ism
                  </label>
                  <div className="w-full text-center">
                    <select
                      ref={inp11}
                      id="simple-search"
                      className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
                      aria-label=".form-select-lg example"
                      required=""
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" disabled>
                        Вид...
                      </option>
                      <option value="Масла">Масла</option>
                      <option value="Смазки">Смазки</option>
                      <option value="Другие продукты">Другие продукты</option>
                      <option value="Образцы">Образцы</option>
                    </select>

                    <select
                      ref={inp10}
                      id="simple-search"
                      className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      {/* <option>Категория...</option> */}

                      {category === "Масла" && (
                        <>
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
                          <option value="Образцы" className="soptionnamuna">
                            Образцы
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp7}
                      type="text"
                      id="simple-search"
                      // value={inp7.name}
                      // defaultValue="spTeacher.name"
                      className="mx-auto mb-3 w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Название"
                      required=""
                    />
                  </div>
                  <div className="w-full text-center ml-1 row d-flex justify-between mb-5">
                    <div className="col-12 col-md-4">
                      <input
                        ref={inp8}
                        type="text"
                        id="simple-search"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ид номер"
                        required=""
                      />
                    </div>
                    <div className="col-12 mb-5 col-md-8">
                      <input
                        ref={inp9}
                        type="text"
                        id="simple-search"
                        className="mx-auto w-full innnn max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="№ Н/Д"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="oddd hidden">
                    <select
                      ref={inp1}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp1
                      </option>
                    </select>
                    <select
                      ref={inp2}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp2
                      </option>
                    </select>
                    <select
                      ref={inp3}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp3
                      </option>
                    </select>
                    <select
                      ref={inp4}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="element">
                        inp4
                      </option>
                    </select>
                    <select
                      ref={inp5}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="created">
                        inp5
                      </option>
                    </select>
                    <select
                      ref={inp6}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp6
                      </option>
                    </select>
                    <select
                      ref={inp12}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp12
                      </option>
                    </select>
                    <select
                      ref={inp13}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp13
                      </option>
                    </select>
                    <select
                      ref={inp14}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp14
                      </option>
                    </select>
                    <select
                      ref={inp15}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp15
                      </option>
                    </select>
                    <select
                      ref={inp16}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp16
                      </option>
                    </select>
                    <select
                      ref={inp17}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp17
                      </option>
                    </select>
                    <select
                      ref={inp18}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp18
                      </option>
                    </select>
                    <select
                      ref={inp19}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp19
                      </option>
                    </select>
                    <select
                      ref={inp20}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp20
                      </option>
                    </select>
                    <select
                      ref={inp21}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp21
                      </option>
                    </select>
                    <select
                      ref={inp22}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        inp22
                      </option>
                    </select>
                    <select
                      ref={inp23}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="chilon">
                        inp23
                      </option>
                    </select>
                    <select
                      ref={inp24}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="chilon">
                        inp24
                      </option>
                    </select>
                    <select
                      ref={inp25}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="chilon">
                        inp25
                      </option>
                    </select>
                    <select
                      ref={inp26}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="nonee">
                        nonee
                      </option>
                    </select>
                  </div>
                </form>
                <div className="forBtn">
                  <button
                    onClick={editTeacher}
                    type="button"
                    id="simple-search"
                    className="buttun"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {edit && (
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
      )}
      {prof && (
        <div
          id="profile-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-11/12 max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={prof1}
                type="button"
                className="absolute srr top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="profile-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 w-full">
                <div className=" w-full p-3 border-none bg-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="teacher flex justify-end px-4 pt-4"></div>
                  <div className=" pb-10">
                    <table className="w-full">
                      <thead className="theadd">
                        <th className="theadd1">{spTeacher.name}</th>
                        <th>
                          Дата создания : {formatDate(spTeacher.createdAt)}
                        </th>
                      </thead>
                    </table>
                    <div className="pluss posta">
                      <a
                        onClick={backdrop2}
                        data-modal-target="post-modal"
                        data-modal-toggle="post-modal"
                        href="#"
                        className="post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {/* <i className="fa-solid fa-square-plus"></i> */}
                        <button className="addposition">
                          Добавить позиция
                        </button>
                        {/* {spTeacher._id} */}
                      </a>
                    </div>

                    {backdropp && (
                      <div
                        id="post-modal"
                        tabIndex="-1"
                        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                        aria-modal="true"
                        role="dialog"
                      >
                        <div className="relative w-8/12 max-h-full">
                          <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                              onClick={backdrop2}
                              type="button"
                              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              data-modal-hide="post-modal"
                            >
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                            <div className="w-full px-6 py-6 lg:px-8">
                              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Добавить позицию к продукту
                              </h3>
                              <label
                                htmlFor="simple-search"
                                className="sr-only"
                              >
                                Ism
                              </label>
                              <form className="items-center gap-16 mb-5">
                                <label
                                  htmlFor="simple-search"
                                  className="sr-only"
                                >
                                  Ism
                                </label>
                                <div className="w-full text-center ml-1 row d-flex justify-between mb-5">
                                  <div className="col-12 col-md-6">
                                    <input
                                      ref={inp24}
                                      type="text"
                                      id="simple-search"
                                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Наименование показателя"
                                      required=""
                                    />
                                  </div>
                                  <div className="col-12 mb-5 col-md-6">
                                    <input
                                      ref={inp25}
                                      type="text"
                                      id="simple-search"
                                      className="mx-auto w-full innnn max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Норма"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </form>
                              <form className="flex items-center hidden gap-16 mb-5">
                                <div className="w-full hidden">
                                <div className="col-12 mb-5 col-md-6">
                                    <input
                                      ref={inp26}
                                      value={spTeacher._id}
                                      type="text"
                                      id="simple-search"
                                      className="mx-auto w-full innnn max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="namee"
                                      required=""
                                    />
                                  </div>
                                  <input
                                    ref={inp7}
                                    type="text"
                                    id="simple-search"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="11111"
                                    required=""
                                    value={spTeacher.name}
                                  />
                                  <input
                                    ref={inp8}
                                    type="text"
                                    id="simple-search"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="11111"
                                    required=""
                                    value={spTeacher.nameId}
                                  />
                                  <input
                                    ref={inp9}
                                    type="text"
                                    id="simple-search"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="11111"
                                    required=""
                                    value={spTeacher.norma}
                                  />
                                  <select
                                    ref={inp10}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option
                                      className="soption"
                                      value={spTeacher.type}
                                    >
                                      Tanlang...
                                    </option>
                                  </select>
                                  <select
                                    ref={inp11}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option
                                      className="soption"
                                      value={spTeacher.group}
                                    >
                                      Tanlang...
                                    </option>
                                  </select>
                                  <select
                                    ref={inp12}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                  </select>
                                  <select
                                    ref={inp13}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp14}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp15}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp16}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value={spTeacher._id}>
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp17}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp18}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp19}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp20}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp21}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp22}
                                    id="simple-search"
                                    className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    aria-label=".form-select-lg example"
                                    required=""
                                  >
                                    <option className="soption" value="none">
                                      Tanlang...
                                    </option>
                                    <option
                                      className="soption"
                                      value="Proizvodstvo xodimi"
                                    >
                                      Proizvodstvo xodimi
                                    </option>
                                    <option
                                      className="soption"
                                      value="Laboratoriya xodimi"
                                    >
                                      Laboratoriya xodimi
                                    </option>
                                  </select>
                                  <select
                                    ref={inp1}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="ism">Xodim</option>
                                  </select>
                                  <select
                                    ref={inp2}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="fam">Xodim</option>
                                  </select>
                                  <select
                                    ref={inp3}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="log">Xodim</option>
                                  </select>
                                  <select
                                    ref={inp4}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="position">position</option>
                                  </select>
                                  <select
                                    ref={inp5}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="created">Xodim</option>
                                  </select>
                                  <select
                                    ref={inp6}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="pass">Xodim</option>
                                  </select>
                                  <select
                                    ref={inp23}
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                  >
                                    <option value="chilon">Xodim</option>
                                  </select>
                                </div>
                              </form>

                              <div className="forBtn">
                                <button
                                  onClick={addTeacher}
                                  type="button"
                                  id="simple-search"
                                  className="buttun"
                                >
                                  Отправить
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {backdropp && (
                      <div
                        modal-backdrop=""
                        className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
                      ></div>
                    )}
                    <Chilonpos />
                    
                    {/* <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Название : </strong>
                      {spTeacher.name}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Вид : </strong>
                      {spTeacher.group}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Категория : </strong>
                      {spTeacher.type}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Ид номер : </strong>
                      {spTeacher.nameId}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>№ Н/Д : </strong>
                      {spTeacher.norma}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Дата создания : </strong>
                      {formatDate(spTeacher.createdAt)}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {prof && (
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
      )} */}
      {backdrop && (
        <div
          id="post-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-5/12 max-h-full">
            <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={backdrop1}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="post-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="w-full px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Добавление продукт в систему
                </h3>
                <label htmlFor="simple-search" className="sr-only">
                  Ism
                </label>
                <form className="items-center gap-16 mb-5">
                  <label htmlFor="simple-search" className="sr-only">
                    Ism
                  </label>
                  <div className="w-full text-center">
                    <select
                      ref={inp11}
                      id="simple-search"
                      className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
                      aria-label=".form-select-lg example"
                      required=""
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" disabled>
                        Вид...
                      </option>
                      <option value="Масла">Масла</option>
                      <option value="Смазки">Смазки</option>
                      <option value="Другие продукты">Другие продукты</option>
                      <option value="Образцы">Образцы</option>
                    </select>

                    <select
                      ref={inp10}
                      id="simple-search"
                      className="custom-select opt shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      {/* <option>Категория...</option> */}

                      {category === "Масла" && (
                        <>
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
                          <option value="Образцы" className="soptionnamuna">
                            Образцы
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp7}
                      type="text"
                      id="simple-search"
                      className="mx-auto mb-3 w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Название"
                      required=""
                    />
                  </div>
                  <div className="w-full text-center ml-1 row d-flex justify-between mb-5">
                    <div className="col-12 col-md-4">
                      <input
                        ref={inp8}
                        type="text"
                        id="simple-search"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ид номер"
                        required=""
                      />
                    </div>
                    <div className="col-12 mb-5 col-md-8">
                      <input
                        ref={inp9}
                        type="text"
                        id="simple-search"
                        className="mx-auto w-full innnn max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="№ Н/Д"
                        required=""
                      />
                    </div>
                  </div>
                </form>
                <form className="flex items-center hidden gap-16 mb-5">
                  <div className="w-full">
                    <select
                      ref={inp12}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp13}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp14}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp15}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp16}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="aaa">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp17}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp18}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp19}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp20}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp21}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                    <select
                      ref={inp22}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="none">
                        Tanlang...
                      </option>
                      <option className="soption" value="Proizvodstvo xodimi">
                        Proizvodstvo xodimi
                      </option>
                      <option className="soption" value="Laboratoriya xodimi">
                        Laboratoriya xodimi
                      </option>
                    </select>
                  </div>
                  <div className="w-full hidden">
                    <select
                      ref={inp1}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="ism">Xodim</option>
                    </select>
                    <select
                      ref={inp2}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="fam">Xodim</option>
                    </select>
                    <select
                      ref={inp3}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="log">Xodim</option>
                    </select>
                    <select
                      ref={inp4}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="element">element</option>
                    </select>
                    <select
                      ref={inp5}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="created">Xodim</option>
                    </select>
                    <select
                      ref={inp6}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="pass">Xodim</option>
                    </select>
                    <select
                      ref={inp23}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="chilon">Xodim</option>
                    </select>
                    <select
                      ref={inp24}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="none">Xodim</option>
                    </select>
                    <select
                      ref={inp25}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="none">Xodim</option>
                    </select>
                    <select
                      ref={inp26}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="nonee">nonee</option>
                    </select>
                  </div>
                </form>

                <div className="forBtn">
                  <button
                    onClick={addTeacher}
                    type="button"
                    id="simple-search"
                    className="buttun"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {backdrop && (
        <div
          modal-backdrop=""
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
        ></div>
      )}
    </>
  );
};
