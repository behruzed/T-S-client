import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../../../qwe/config";
import Table from "./ChDSObshegoTable";
import '../../../style.css'
import React from "react";
import Aside from "../../../Aside";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function ChDSObshego() {
    let [Obshego, setItem] = useState([])
    let [spTeacher, setSpTecher] = useState([])
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const checkHuman = async (id) => {
        let res = await axios.get(`${config.url}/Obshego/${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSpTecher(res.data.data);
        return res.data.data
    };

    const fetchTecher = async () => {
        let res = await axios.get(`${config.url}/Obshego`, {
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
            <Breadcrumb.Item href="/adminpanel">Главная</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish">Добавить заявку</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish/chilon">Чилон</Breadcrumb.Item>
            <Breadcrumb.Item href="/ariza-qoshish/chilon/smazki">Смазки</Breadcrumb.Item>
            <Breadcrumb.Item active>Смазки общего назначения</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="h11">Смазки общего назначения</h1>
          <div>
                <div className="bg-white dark:bg-gray-900">
                <div className="container w-full mx-auto py-12">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                        <Table data={Obshego} th={["Название", "№ Н/Д", "ИД НОМЕР"]} spTeacherFunc={checkHuman} spTeacher={spTeacher} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default ChDSObshego