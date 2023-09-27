import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../qwe/config";
import Table from "./SmazkiiTable";
import '../style.css'
import React from "react";

function Smazkii() {
    let [Smazkii, setItem] = useState([])
    let [spTeacher, setSpTecher] = useState([])
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/smazkii/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSpTecher(res.data.data);
        return res.data.data
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/smazkii`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.location.replace('/')
        }
        setItem(res.data.data);
    }

    useEffect(() => {
        fetchTecher()
    }, [])

    return (
        <>

                    <div>
                        <div className="bg-white dark:bg-gray-900">
                            <div className="container w-10/12 mx-auto py-12">
                                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                                    <Table data={Smazkii} th={["Название", "Категория", "Отделение", "Норма"]} spTeacherFunc={checkHuman} spTeacher={spTeacher} />
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Smazkii