import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function TaskListNumbers({ data }) {
  const [userData, setUserData, handelAcceptButton] = useContext(AuthContext);

  const [newTaskCount, setNewTaskCount] = useState(0);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [failedTaskCount, setFailedTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const currentUser = userData.find((e) => e.id == data.id);
  useEffect(() => {
    let newTasks = 0;
    let activeTasks = 0;
    let failedTasks = 0;
    let completedTasks = 0;

    currentUser.tasks.forEach((ele) => {
      if (ele.newTask) {
        newTasks += 1;
      }
      if (ele.active) {
        activeTasks += 1;
      }
      if (ele.failed) {
        failedTasks += 1;
      }
      if (ele.completed) {
        completedTasks += 1;
      }
    });

    setNewTaskCount(newTasks);
    setActiveTaskCount(activeTasks);
    setFailedTaskCount(failedTasks);
    setCompletedTaskCount(completedTasks);
  }, [userData]);

  return (
    <div className="flex justify-center screen gap-4 p-3">
      <div className="bg-yellow-500 h-40 w-[45%] rounded-xl  flex flex-col p-2 justify-center items-center">
        <h2 className="text-5xl my-3">{newTaskCount}</h2>
        <h3 className="font-bold text-3xl">New Task</h3>
      </div>
      <div className="bg-green-500 h-40 w-[45%] rounded-xl flex flex-col p-2 justify-center items-center">
        <h2 className="text-5xl my-3">{completedTaskCount}</h2>
        <h3 className="font-bold text-3xl">Completed Task</h3>
      </div>
      <div className="bg-blue-500 h-40 w-[45%] rounded-xl flex flex-col p-2 justify-center items-center">
        <h2 className="text-5xl my-3">{activeTaskCount}</h2>
        <h3 className="font-bold text-3xl">Active Task</h3>
      </div>
      <div className="bg-red-500 h-40 w-[45%] rounded-xl flex flex-col p-2 justify-center items-center">
        <h2 className="text-5xl my-3">{failedTaskCount}</h2>
        <h3 className="font-bold text-3xl">Failed Task</h3>
      </div>
    </div>
  );
}