import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const handelAcceptButton = (element, singleData) => {
    const employees = JSON.parse(localStorage.getItem("employee"));
    const newEmployeesData = employees.map((employee) => {
      if (element.id == employee.id) {
        let newEmployee = { ...employee };
        newEmployee.tasks = newEmployee.tasks.map((ele) => {
          if (ele.title == singleData.title) {
            return { ...ele, active: true, newTask: false };
          }
          return ele;
        });
        return newEmployee;
      }

      return employee;
    });
    localStorage.setItem("employee", JSON.stringify(newEmployeesData));
    setUserData(newEmployeesData);
  };

  const handelCompletedButton = (element, singleData) => {
    const employees = JSON.parse(localStorage.getItem("employee"));
    const newEmployeesData = employees.map((employee) => {
      if (element.id == employee.id) {
        let newEmployee = { ...employee };
        newEmployee.tasks = newEmployee.tasks.map((ele) => {
          if (ele.title == singleData.title) {
            return { ...ele, completed: true, active: false };
          }
          return ele;
        });
        return newEmployee;
      }

      return employee;
    });
    localStorage.setItem("employee", JSON.stringify(newEmployeesData));
    setUserData(newEmployeesData);
  };

  const handelFailedButton = (element, singleData) => {
    const employees = JSON.parse(localStorage.getItem("employee"));
    const newEmployeesData = employees.map((employee) => {
      if (element.id == employee.id) {
        let newEmployee = { ...employee };
        newEmployee.tasks = newEmployee.tasks.map((ele) => {
          if (ele.title == singleData.title) {
            return { ...ele, failed: true, active: false };
          }
          return ele;
        });
        return newEmployee;
      }

      return employee;
    });
    localStorage.setItem("employee", JSON.stringify(newEmployeesData));
    setUserData(newEmployeesData);
  };

  const handelAutoDelete = (element, singleData) => {
    const removeFunc = () => {
      const employees = JSON.parse(localStorage.getItem("employee"));
      const newEmployeesData = employees.map((employee) => {
        if (element.id == employee.id) {
          let newEmployee = { ...employee };
          newEmployee.tasks = newEmployee.tasks.map((ele) => {
            if (ele.title == singleData.title) {
              return { ...ele, failed: true, active: false };
            }
            return ele;
          });
          return newEmployee;
        }

        return employee;
      });
      localStorage.setItem("employee", JSON.stringify(newEmployeesData));
      setUserData(newEmployeesData);
    };

    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const date = todayDate.getDate();
    const taskDate = singleData.taskDate;
    const [taskYear, taskMonth, taskDay] = taskDate.split("-");
    if (taskYear > year) {
      removeFunc();
    } else if (taskYear == year && taskMonth > month) {
      removeFunc();
    } else if (taskYear == year && taskMonth == month && date > taskDay) {
      removeFunc();
    }
  };

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={[
          userData,
          setUserData,
          handelAcceptButton,
          handelCompletedButton,
          handelFailedButton,
          handelAutoDelete,
        ]}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}
