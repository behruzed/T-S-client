import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../../../qwe/config";
import Table from "./PlastikTable";
import '../../../style.css'
import React from "react";
import Aside from '../../../Aside'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom';

function Plastik() {
    let [Plastik, setItem] = useState([])
    let [spTeacher, setSpTecher] = useState([])
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/plastik/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSpTecher(res.data.data);
        return res.data.data
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/plastik`, {
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
            <div className="row mainrow">
                <div className="col-0 col-md-2"></div>
                <div className="chap col-0 col-md-2">
                <Aside />
                </div>
                <div className="ong col-12 col-md-10">
                <Breadcrumb className="bread">
                <Breadcrumb.Item><Link to="/adminpanel">Главная</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/shablonlar">Шаблоны</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/chilonshablon">Чилон</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/chilon-smazki">Смазки</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Пластичные смазки</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="h11">Пластичные смазки</h1>
                <div>
                        <div className="bg-white dark:bg-gray-900">
                        <div className="container w-full mx-auto py-12">
                                <div className="relative overflow-x-auto sm:rounded-lg">
                                    <Table data={Plastik} th={["Название", "Категория", "Отделение", "Норма"]} spTeacherFunc={checkHuman} spTeacher={spTeacher} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plastik