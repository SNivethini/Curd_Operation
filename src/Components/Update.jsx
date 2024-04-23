import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";

function Update() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [checked, setChecked] = useState(false);
  const [id,setId] = useState('')
  const nav2 = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("ID"))
    setFirstname(localStorage.getItem("fristName"))
    setLastname(localStorage.getItem("lastName"))
    setChecked(localStorage.getItem("checked"))
    
  }, []);

  const updateUser=async()=>{
    //  axios.put(API_URL+id,{firstName,lastName,checked}).then((response)=>{setFirstname(response.data.firstName),setLastname(response.data.lastName),setChecked(response.data.checked)})
   await axios.put(API_URL+id,{firstName,lastName,checked})
    nav2('/read')


  }
  return (
    <div className=" flex flex-col justify-center items-center"> 
      <div>
          <label htmlFor="firstName">Firstname</label>
          <input
            className="border-2 m-6 border-black"
            type="text"
            name="firstName"
            id=""
            onChange={(e) => setFirstname(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Lastname</label>
          <input
            className="border-2 m-6 border-black"
            type="text"
            name="lastName"
            id=""
            onChange={(e) => setLastname(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="flex gap-[10px] py-[10px]">
          <input
            type="checkbox"
            name="checked"
            id=""
            onClick={() => setChecked(!checked)}
          />
          <p>Agree terms and condition</p>
        </div>
        <button
          type="submit"
          className="border-2 border-black px-[10px] rounded-lg"
          onClick={updateUser}
        >
          update
        </button>
    </div>
  );
}

export default Update;
