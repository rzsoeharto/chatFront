import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function LoginPage() {
  const { loginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { password, email } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password == "") {
      alert("please fill in all the fields");
    }

    loginUser(email, password);
  };

  const onMutate = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  return (
    <>
      <div className="flex flex-row w-full h-full place-content-center space-x-3">
        <div className="bg-white w-[500px] h-2/6 rounded">
          <form className="flex flex-col p-5" onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
              onChange={onMutate}
              type="text"
              id="email"
              placeholder="Email"
              className="bg-[#996cd2] py-3 pl-2 text-white"
            />

            <label htmlFor="password">Password</label>
            <input
              onChange={onMutate}
              type="password"
              id="password"
              placeholder="Password"
              className="bg-[#996cd2] py-3 pl-2 text-white"
            />

            <button
              id="submit"
              className="btn btn-accent p-3 rounded-none mt-5"
            >
              submit
            </button>
          </form>
        </div>
        <Link to="/" className="h-min">
          <p className="btn btn-accent">\\ Home</p>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
