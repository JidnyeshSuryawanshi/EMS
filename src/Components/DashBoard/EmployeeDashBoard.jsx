import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashBoard({ setUser,data }) {
  
  return (
    <div className="bg-gray-900 h-screen text-white">
      <Header setUser={setUser} data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  );
}