import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../qwe/config";
import Table from "./BotkritieTableForchildren";
import '../style.css'
import React from "react";

function Botkritie({fn}) {
    let [Botkritie, setItem] = useState([])
    let [spTeacher, setSpTecher] = useState([])
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/Botkritie/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSpTecher(res.data.data);
        return res.data.data
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/Botkritie`, {
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
                <div className="container w-8/12 mx-auto py-12">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                        <Table fn={fn} data={Botkritie} th={["Название"]} spTeacherFunc={checkHuman} spTeacher={spTeacher} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Botkritie