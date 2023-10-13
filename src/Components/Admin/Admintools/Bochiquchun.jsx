import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../qwe/config";
import Table from "./BochiquchunTable";
import '../style.css';

function Bochiquchun() {
    let [bochiq, setItem] = useState([]);
    let [spTeacher, setSpTecher] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/bochiq/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token"),
            },
        });

        setSpTecher(res.data.data);
        return res.data.data;
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/bochiq`, {
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
                                data={bochiq}
                                th={["Наименование показателя", "Норма", "Значение"]}
                                spTeacherFunc={checkHuman}
                                spTeacher={spTeacher}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bochiquchun;
