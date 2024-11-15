"use client";
import React from "react";

const page = () => {
  const handelRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      image: event.target.image.value,
      type: event.target.type.value,
      password: event.target.password.value,
    };
    const resp = await fetch(
      "http://localhost:3000/api/auth/signup/new-user",
      {
        method: "POST",
        body : JSON.stringify(newUser),
        headers: {
          "content-type" : "application/json",
        },
      }
    );
    event.target.reset()
    console.log(resp)
  };

  return (
    <div className="flex items-center justify-center min-h-screen top-0">
      <div>
        <h3 className="text-lg font-semibold">
          Sign Up With Email And Password
        </h3>
        <div>
          <form onSubmit={handelRegister} action="">
            <label htmlFor="email"> Name </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="outline-none border-transparent p-3 text-slate-700"
            />{" "}
            <br />
            <br />
            <label htmlFor="email"> Email </label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="email"> Image </label>
            <br />
            <input
              type="text"
              name="image"
              placeholder="Input your image url"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="email"> Type </label>
            <br />
            <select
              name="type"
              placeholder="user type"
              className="outline-none border-transparent p-3 text-slate-700"
            >
              <option value="admin">Admin</option>
              <option value="modaretor">Modaretor</option>
              <option value="member">Member</option>
            </select>
            <br />
            <br />
            <label htmlFor="password"> Password </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="outline-none border-transparent p-3 text-slate-700"
            />{" "}
            <br />
            <br />
            <button className="bg-orange-500 p-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
