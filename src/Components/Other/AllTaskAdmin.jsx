import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SingleEmployeeumbers from "./SingleEmployeeumbers";
export default function AllTaskAdmin() {
  // const [userData, setUserData] = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("employee"));
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(true);
  }, [userData]);

  return (
    <div className="bg-gray-800 p-5  rounded ">
      <div className="bg-red-400 py-2 px-4 mb-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/7">Employee Id</h2>
        <h2 className="text-lg font-medium w-1/6">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/7">New Task</h3>
        <h5 className="text-lg font-medium w-1/7">Active Task</h5>
        <h5 className="text-lg font-medium w-1/7">Completed</h5>
        <h5 className="text-lg font-medium w-1/7">Failed</h5>
        <button></button>
      </div>

      <div className="h-[40vh] overflow-auto mb-10 all-task-admin">
        {userData.map((ele, idx) => {
          return <SingleEmployeeumbers ele={ele} key={idx} />;
        })}
      </div>
    </div>
  );
}
