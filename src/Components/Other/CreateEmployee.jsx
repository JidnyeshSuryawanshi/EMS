import React, { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function CreateEmployee() {
  const [userData, setUserData] = useContext(AuthContext);

  const employeeId = useRef();
  const employeeFirstName = useRef();
  const employeeEmail = useRef();
  const employeePassword = useRef();

  const handelOnCreateEmployee = (e) => {
    e.preventDefault();
    const newEmployeeObj = {
      id: employeeId.current.value,
      firstName: employeeFirstName.current.value,
      password: employeePassword.current.value,
      email: employeeEmail.current.value,
      tasks: [],
      taskCounts: {},
    };

    const newUserData = [...userData, newEmployeeObj];
    setUserData(newUserData);
    localStorage.setItem("employee", JSON.stringify(newUserData));

    employeeEmail.current.value = "";
    employeeFirstName.current.value = "";
    employeePassword.current.value = "";
    employeeId.current.value = "";
  };

  return (
    <div className="flex flex-col gap-4 w-[30%] bg-gray-800 p-10 rounded-xl text-white mb-10 ">
      <h1 className="text-3xl font-semibold text-white">Create Employee</h1>
      <div>
        <form onSubmit={handelOnCreateEmployee} className="flex flex-col gap-7 text-white">
          <div className="flex flex-col gap-4">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              ref={employeeId}
              type="number"
              className="bg-gray-700 pl-2 py-1 rounded-xl w-full"
              id="employeeId"
              placeholder="Enter Unique ID"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="employeeFirstName">Employee First Name</label>
            <input
              ref={employeeFirstName}
              type="text"
              className="bg-gray-700 pl-2 py-1 rounded-xl w-full"
              id="employeeFirstName"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="employeeEmail">Employee's Email</label>
            <input
              ref={employeeEmail}
              type="text"
              className="bg-gray-700 pl-2 py-1 rounded-xl w-full"
              id="employeeEmail"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="employeePass">Employee's Password</label>
            <input
              ref={employeePassword}
              type="password"
              className="bg-gray-700 pl-2 py-1 rounded-xl w-full"
              id="employeePass"
              placeholder="Enter Password"
            />
          </div>

          <button className="bg-black p-2 text-white w-full rounded-xl place-self-center">
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
}
