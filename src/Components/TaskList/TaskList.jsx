import React, { useContext, useEffect, useState } from "react";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../Context/AuthProvider";
export default function TaskList({ data }) {
  const [
    userData,
    setUserData,
    handelAcceptButton,
    handelCompletedButton,
    handelFailedButton,
    handelAutoDelete,
  ] = useContext(AuthContext);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChanged(true);
  }, [userData]);

  const dat = JSON.parse(localStorage.getItem("employee"));

  const currentUser = dat?.find((user) => user.id === data.id);

  const handelRemove = (title) => {
    const updatedTasks = currentUser.tasks.filter((ele) => ele.title !== title);

    const updatedUserData = userData.map((user) =>
      user.id === currentUser.id ? { ...user, tasks: updatedTasks } : user
    );

    setUserData(updatedUserData);

    localStorage.setItem("employee", JSON.stringify(updatedUserData));
  };
  return (
    <div className="flex flex-row outer-task-div overflow-scroll w-[95%] mt-5 p-4 px-5 gap-4 m-auto h-[45%] bg-gray-700 rounded-2xl">
      {currentUser?.tasks.map((element, idx) => {
        const handelAccept = () => {
          handelAcceptButton(currentUser, element);
        };

        const handelCompleted = () => {
          handelCompletedButton(currentUser, element);
        };

        const handelFailed = () => {
          handelFailedButton(currentUser, element);
        };

        const autoDelete = () => {
          handelAutoDelete(currentUser, element);
        };

        if (element.active) {
          return (
            <AcceptTask
              key={idx}
              data={element}
              handelCompleted={handelCompleted}
              handelFailed={handelFailed}
              autoDelete={autoDelete}
            />
          );
        }
        if (element.completed) {
          return (
            <CompleteTask
              key={idx}
              data={element}
              handelRemove={handelRemove}
            />
          );
        }
        if (element.failed) {
          return <FailedTask key={idx} data={element} />;
        }
        if (element.newTask) {
          return (
            <NewTask
              key={idx}
              data={element}
              handelAccept={handelAccept}
              handelFailed={handelFailed}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
