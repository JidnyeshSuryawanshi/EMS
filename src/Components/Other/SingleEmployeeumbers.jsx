import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function SingleEmployeeumbers({ ele }) {
  const [userData, setUserData] = useContext(AuthContext);

  const [newTaskCount, setNewTaskCount] = useState(0);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [failedTaskCount, setFailedTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const currentUser = ele;
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
  }, [userData, ele]);

  const handelDeleteEmployee = (id) => {
    const newUserData = userData.filter((ele) => {
      return id != ele.id;
    });
    setUserData(newUserData);
    localStorage.setItem("employee", JSON.stringify(newUserData));
  };

  return (
    <div>
      <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg text-[#cbeaf5] font-medium  w-1/7">{ele.id}</h2>
        <h2 className="text-lg font-medium text-[#cbeaf5] w-1/6">
          {ele.firstName}
        </h2>
        <h3 className="text-lg font-medium w-1/7 text-blue-400">
          {newTaskCount}
        </h3>
        <h5 className="text-lg font-medium w-1/7 text-yellow-400">
          {activeTaskCount}
        </h5>
        <h5 className="text-lg font-medium w-1/7 text-white">
          {completedTaskCount}
        </h5>
        <h5 className="text-lg font-medium w-1/7 text-red-600">
          {failedTaskCount}
        </h5>

        <button
          onClick={() => handelDeleteEmployee(ele.id)}
          className="text-black bg-white px-2 hover:underline rounded-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
