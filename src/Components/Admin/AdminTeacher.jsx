import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../qwe/config";
import Table from "./AdminTeacherTable";
import "./style.css";

function AdminTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [spTeacher, setSpTeacher] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [student1, setStudent1] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const checkHuman = async (id) => {
    let res = await axios.get(`${config.url}/teachers/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    setSpTeacher(res.data.data);
  };

  const fetchTeacher = async () => {
    let res = await axios.get(`${config.url}/teachers`, {
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
    setTeachers(res.data.data);

    if (res.data.data.length > 0) {
      setStudent1(res.data.data[0]);
    }
  };

  useEffect(() => {
    fetchTeacher();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white dark:bg-gray-900">
          <div className="container w-full mx-auto py-12">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <Table
                data={teachers}
                th={["Имя", "фамилия", "логин", "статус"]}
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

export default AdminTeacher;
