import React, { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const { name, password, email } = formData;

  async function testRequest(method) {
    const response = await fetch(`http://localhost:8000/api/register/`, {
      method: method,
      headers:
        method === "POST"
          ? {
              "Content-Type": "application/json",
              // "X-CSRFToken": xcsrf,
            }
          : {},
      //   credentials: "include",
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(response.body);
    return data.result;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    testRequest("POST");
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <div>
        <form className="flex flex-col w-1/4" onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onChange={onMutate}
            type="text"
            id="email"
            placeholder="Email"
            className="bg-white p-3 rounded text-black"
          />
          <label htmlFor="name">Name</label>
          <input
            onChange={onMutate}
            type="text"
            id="name"
            placeholder="John Smith"
            className="bg-white p-3 rounded text-black"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={onMutate}
            type="password"
            id="password"
            placeholder="Password"
            className="bg-white p-3 rounded text-black"
          />
          <button id="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
