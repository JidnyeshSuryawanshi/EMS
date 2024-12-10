import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTaskAdmin from "../Other/AllTaskAdmin";
import CreateEmployee from "../Other/CreateEmployee";

export default function AdminDashBoard({ setUser }) {
  return (
    <>
      <Header setUser={setUser} data={{ firstName: "Admin" }} />
      <div className="flex gap-40 justify-center bg-gray-900">
        <CreateTask />
        <CreateEmployee />
      </div>
      <AllTaskAdmin />
    </>
  );
}
