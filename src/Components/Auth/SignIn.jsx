import { useRef, useState } from "react";
import config from "../../qwe/config";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import gif from '../../images/kOnyz.gif';
import "./sign.css";
import wasat from "../../images/wasat.jpg";
import loading from "../../images/loading.gif";

function SignIn() {
  const [spiner, setSpiner] = useState(false);
  const navigate = useNavigate(); 

  const gcv = (inp) => {
    return inp.current.value;
  };

  let inp1 = useRef(null);
  let inp2 = useRef(null);

  const checkBtn = async () => {
    if (gcv(inp1) && gcv(inp2)) {
      setSpiner(true);
      setTimeout(() => {
        setSpiner(false);
      }, 200000);
      let user = {
        email: gcv(inp1),
        password: gcv(inp2),
      };
      let res = await axios.post(`${config.url}/auth`, user);
      if (res.data.title === "XATOLIK: ") {
        if (res.data.message === "Логин не найден❌") {
          alert("Логин не найден❌");
        } else if (res.data.message === "Неправильный пароль❌") {
          alert("Неправильный пароль❌");
        }
      } else if (res.data.title === "Success") {
        let TOKEN = res.data.token;
        let PERSON = res.data.person;
        window.localStorage.setItem("token", TOKEN);
        window.localStorage.setItem("person", PERSON);
        if (res.data.status === "admin") {
          navigate(`/adminpanel`); // Tarixni ishlatib o'tish
        } else if (res.data.status === "Рабочий на производстве") {
          navigate("/proizvodstvo");
        } else if (res.data.status === "Работник лаборатории") {
          navigate("/laboratoriya");
        } else if (res.data.status === "Начальник производства") {
          navigate("/nachalnik-pr");
        } else if (res.data.status === "Заведующий лабораторией") {
          navigate("/nachalnik-lab");
        } else if (res.data.status === "Склад") {
          navigate("/omborxona");
        } else if (res.data.status === "Снабжения") {
          navigate("/taminlash");
        } else if (res.data.status === "Технолог") {
          navigate("/texnolog");
        }
      }
    } else {
      alert("Barcha maydonlarni to`ldiring");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkBtn();
  };

  return (
    <>
      <div>
        <main className="bg-white h-screen">
            

          {spiner && (
            <div className="lds-roller">
              <div className="salomdiv row">
              <div className="col-12 eerr">
              <img src={loading} className="lldd eerr text-center" alt="Loading gif" />
                </div>
                <div className="col-12">
                Пожалуйста, подождите...
              <br></br>
Подключение к серверу
                </div>
</div>
            </div>
          )}
          <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div className="card sm:mx-auto sm:w-full sm:max-w-sm bg-gray-200 dark:bg-gray-800 p-5  rounded-lg shadow">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                  Войдите в свой аккаунт
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                  className="space-y-6"
                  action="#"
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Логин
                    </label>
                    <div className="mt-2">
                      <input
                        ref={inp1}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                      >
                        Пароль
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        ref={inp2}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Вход
                    </button>
                  </div>
                  <p className="text-center">
                    {" "}
                    Внутренняя система <a
                      className="link-underline-warning"
                      target="_blank"
                      href="https://chilon.uz"
                    > Chilon Lubricants
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
            <a target="_blank" href="https://t.me/WmwasatmiamariawM">
              <div className="createdbywasad">
                <h5>Created by behruzed.uz</h5>
{/*                 <img src={wasat} alt="Wasat group logo" /> */}
              </div>
            </a>
        </main>
      </div>
    </>
  );
}

export default SignIn;
