import React, { useState } from "react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [checked, setChecked] = useState(false);
  const nav =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(API_URL, { firstName, lastName, checked });
    nav('/read')

    
  };
  return (
    <div>
      <form
        action=""
        className="flex  justify-center items-center flex-col h-[100vh] bg-slate-500"
        onSubmit={handleSubmit}
      >
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
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Create;
