import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setapiData] = useState([]);
  const nav1 = useNavigate();

  const callGetApi = () => {
    axios.get(API_URL).then((respones) => setapiData(respones.data));
    // console.log(response.data);
  };

  useEffect(() => {
    callGetApi();
  }, []);

  const deleteData = (id) => {
    axios.delete(API_URL + id).then((respones) => callGetApi());
  };

  const updateData = (data) => {
    localStorage.setItem("ID", data.id);
    localStorage.setItem("fristName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("checked", data.checked);
    nav1("/update");
  };
  return (
    <div className="flex justify-center items-center h-[100vh] border-2 border-black bg-slate-600">
      <table className="border-collapse border border-slate-400 bg-slate-200">
        <thead className="pr-[30px]">
          <th className="pr-[30px]">Firstname</th>

          <th className="pr-[30px]">Lastname</th>
          <th className="pr-[30px]">Checked</th>
          <th className="pr-[30px]">Delete</th>
          <th className="pr-[30px]">Update</th>
          <hr />
        </thead>
       
        <tbody>
            
          {apiData.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checked ? "checked" : "not checked"}</td>
              <td>
                <button
                  className="border-2 border-slate-900 px-2"
                  onClick={() => deleteData(data.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="border-2 border-slate-900 px-2"
                  onClick={() => updateData(data)}
                >
                  Update
                </button>
              </td>
            </tr>
          
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Read;
