import React, { useState } from "react";
import "./FormCom.css";
const FormCom = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
  });
  const changeHandle = (Event) => {
    const { name, value } = Event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.fullname}  with Email: ${data.email} is submitted`);
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="fullname"
          value={data.fullName}
          onChange={changeHandle}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={changeHandle}
        />
        <label>Subject</label>
        <input type="text" />
        <label>Details</label>
        <textarea rows="6" placeholder="Type a message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default FormCom;
