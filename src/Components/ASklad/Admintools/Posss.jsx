import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../qwe/config";
import Table from "./PosssTable";
import '../style.css';

function Posss() {
    let [pos, setItem] = useState([]);
    let [spTeacher, setSpTecher] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/pos/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token"),
            },
        });

        setSpTecher(res.data.data);
        return res.data.data;
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/pos`, {
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
        setItem(res.data.data);
    };

    useEffect(() => {
        fetchTecher();
    }, []);

    return (
        <>
            <div>
                <div className={darkMode ? "bg-white" : "bg-gray-900"}>
                    <div className="container w-100 mx-none">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <Table
                                data={pos}
                                th={["Наименование показателя", "Норма"]}
                                spTeacherFunc={checkHuman}
                                spTeacher={spTeacher}
                            />
                        </div>
                        <div className="obnovit text-end mr-5 mt-5 d-flex">
                            <p className="text-end">
                                Если внесены новые изменения, обновите страницу.
                            </p>
                            <button className="obnovitbutton" onClick={() => window.location.reload()}>
                                <i className="fa-solid fa-rotate-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posss;
