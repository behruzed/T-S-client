import axios from "axios";
import { useRef, useState } from "react";
import config from "../../qwe/config";
import './style.css'
export default ({ data, th, spTeacherFunc, spTeacher }) => {
  const [edit, setEdit] = useState(false);
  const [prof, setProf] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [teacherId, setTecherId] = useState("");

  let inp1 = useRef(null);
  let inp2 = useRef(null);
  let inp3 = useRef(null);
  let inp4 = useRef(null);
  let inp5 = useRef(null);
  let inp6 = useRef(null);

  const gcv = (inp) => {
    return inp.current.value;
  };
  const backdrop1 = () => {
    setBackdrop(!backdrop);
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
    };
    let res = await axios.put(`${config.url}/teachers/${teacherId}`, data, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    window.location.reload();
    if (res.data.title === "Информация о сотруднике изменена✅") {
      alert(res.data.title);
    }

    inp1.current.value = "";
    inp2.current.value = "";
    inp3.current.value = "";
    inp4.current.value = "";
    inp5.current.value = "";
    inp6.current.value = "";
  };
  const delTeacher = async (id) => {
    let res = await axios.delete(`${config.url}/teachers/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    if (res.data.title === "Сотрудник удален из системы❌") {
      alert(res.data.title);
    }
    window.location.reload();
  };
  const addTeacher = async () => {
    if (
      gcv(inp1) &&
      gcv(inp2) &&
      gcv(inp3) &&
      gcv(inp4) &&
      gcv(inp5) &&
      gcv(inp6)
    ) {
      let data = {
        firstName: gcv(inp1),
        lastName: gcv(inp2),
        email: gcv(inp3),
        subject: gcv(inp4),
        status: inp5.current.value,
        password: gcv(inp6),
      };
      let res = await axios.post(`${config.url}/teachers`, data, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      window.location.reload();
      if (res.data.title === "Сотрудник был создан✅") {
        alert(res.data.title);
      }

      inp1.current.value = "";
      inp2.current.value = "";
      inp3.current.value = "";
      inp4.current.value = "";
      inp5.current.value = "";
      inp6.current.value = "";
    } else {
      alert("Barcha maydonlarni to`ldiring...");
    }
  };

  return (
    <>
      <table className="table w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 text-gray-400 uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
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
            <th scope="col" className="px-6 py-3 text-right w-52">
                <div className="pluss">
                    <a
                    onClick={backdrop1}
                    data-modal-target="post-modal"
                    data-modal-toggle="post-modal"
                    href="#"
                    className="post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"
                >
                    <i className="fa-solid fa-square-plus"></i>
                </a>
                </div>
              <span className="sr-only">Close modal</span>
            </th>
          </tr>
        </thead>
        <tbody>
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
                <td className="px-6 py-4">{item.firstName}</td>
                <td className="px-6 py-4">{item.lastName}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.status}</td>

                <td className="px-6 py-4 pluss2 text-right w-32">
                  <a
                    onClick={edit1}
                    onClickCapture={() => {
                      getId(item._id);
                    }}
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </a>
                  <a
                    onClick={prof1}
                    onClickCapture={() => {
                      spTeacherFunc(item._id);
                    }}
                    data-modal-target="profile-modal"
                    data-modal-toggle="profile-modal"
                    href="#"
                    className="ml-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i className="fa-solid fa-eye"></i>
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
                  Изменение информации о сотруднике
                </h3>
                <form className="flex items-center gap-16 mb-5">
                  <label htmlFor="simple-search" className="sr-only">
                    Имя
                  </label>
                  <div className="w-full">
                    <input
                      ref={inp1}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Имя"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp2}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Фамилия"
                      required=""
                    />
                  </div>
                </form>
                <form className="flex items-center gap-16 mb-5">
                  <div className="w-full">
                    <input
                      ref={inp3}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Логин"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp6}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Пароль"
                      required=""
                    />
                  </div>
                </form>
                <form className="flex items-center gap-16 mb-5">
                  <div className="w-full">
                    <select
                      ref={inp5}
                      id="simple-search"
                      className="shadow-none form-select form-select-lg mb-3 mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      aria-label=".form-select-lg example"
                      required=""
                    >
                      <option className="soption" value="">
                        Выбрать...
                      </option>
                      <option className="soption" value="Рабочий на производстве">
                        Рабочий на производстве
                      </option>
                      <option className="soption" value="Работник лаборатории">
                        Работник лаборатории
                      </option>
                      <option className="soption" value="Начальник производства">
                        Начальник производства
                      </option>
                      <option className="soption" value="Заведующий лабораторией">
                        Заведующий лабораторией
                      </option>
                      <option className="soption" value="Склад">
                        Склад
                      </option>
                      <option className="soption" value="Снабжения">
                        Снабжения
                      </option>
                      <option value="Технолог">
                        Технолог
                      </option>
                      <option className="soption" value="admin">
                        admin
                      </option>
                    </select>
                  </div>
                  <select
                    ref={inp4}
                    id="simple-search"
                    className="mx-auto w-full max-w-md hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  >
                    <option value="xodim">Xodim</option>
                  </select>
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
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={prof1}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
              <div className="px-8 py-6 lg:px-8">
                <div className="w-full max-w-md p-3  border-none bg-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="teacher flex justify-end px-4 pt-4"></div>
                  <div className=" pb-10">
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Имя : </strong>
                      {spTeacher.firstName}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Фамилия : </strong>
                      {spTeacher.lastName}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Логин : </strong>
                      {spTeacher.email}
                    </p>
                    <p className="mb-1 text-xl  text-gray-900 dark:text-white">
                      <strong>Status : </strong>
                      {spTeacher.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {prof && (
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
      )}
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
                Добавление сотрудника в систему
                </h3>
                <label htmlFor="simple-search" className="sr-only">
                  Имя
                </label>
                <form className="flex items-center gap-16 mb-5">
                  <label htmlFor="simple-search" className="sr-only">
                    Имя
                  </label>
                  <div className="w-full">
                    <input
                      ref={inp1}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Имя"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp2}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Фамилия"
                      required=""
                    />
                  </div>
                </form>
                <form className="flex items-center gap-16 mb-5">
                  <div className="w-full">
                    <input
                      ref={inp3}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Логин"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <input
                      ref={inp6}
                      type="text"
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Пароль"
                      required=""
                    />
                  </div>
                </form>
                <form className="flex items-center gap-16">
                  <div className="w-full">
                    <select
                      ref={inp5}
                      id="simple-search"
                      className="mx-auto w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="">Выбрать...</option>
                      <option value="Рабочий на производстве">
                        Рабочий на производстве
                      </option>
                      <option value="Работник лаборатории">
                        Работник лаборатории
                      </option>
                      <option value="Начальник производства">
                      Начальник производства
                      </option>
                      <option value="Заведующий лабораторией">
                        Заведующий лабораторией
                      </option>
                      <option value="Склад">Склад</option>
                      <option value="Снабжения">
                        Снабжения
                      </option>
                      <option value="Технолог">
                        Технолог
                      </option>
                      <option className="soption" value="admin">
                        admin
                      </option>
                    </select>
                  </div>
                  <div className="w-full hidden">
                    <select
                      ref={inp4}
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    >
                      <option value="xodim">Xodim</option>
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