import { useEffect, useState } from "react";
import React from "react";
import AdminStudentTable from "./AdminStudentTable";
import "./style.css";
import config from "../../qwe/config";
import axios from "axios";

function AdminStudent() {
  let [students, setStudents] = useState([]);
  let [spStudent, setSpStudent] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const fetchStudent = async () => {
    let res = await axios.get(`${config.url}/students`, {
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
    setStudents(res.data.data);
  };

  const checkHuman = async (id) => {
    let res = await axios.get(`${config.url}/students/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    setSpStudent(res.data.data);
  };

  const editStudentFunc = async (id) => {
    let res = await axios.get(`${config.url}/teachers/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white h-screen">
          <div className="container w-10/12 mx-auto py-12">
            <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
              <AdminStudentTable
                data={students}
                th={[
                  "firstName",
                  "lastName",
                  "phone",
                  "motherNumber",
                  "fatherNumber",
                ]}
                spStudentFunc={checkHuman}
                spStudent={spStudent}
                editStudentFunc={editStudentFunc}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminStudent;
