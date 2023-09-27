import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../qwe/config";
import Table from "./OddiyZTable";
import '../style.css'
import React from "react";

function Oddiy() {
    let [Obraztsi, setItem] = useState([])
    let [spTeacher, setSpTecher] = useState([])
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/Obraztsi/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSpTecher(res.data.data);
        return res.data.data
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/Obraztsi`, {
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
                <div className="container w-full mx-auto py-12">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <Table data={Obraztsi} th={["Название", "№ Н/Д", "ИД НОМЕР"]} spTeacherFunc={checkHuman} spTeacher={spTeacher} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Oddiy