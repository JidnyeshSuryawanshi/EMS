import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function CreateTask() {
  const [userData, setUserData, handelAcceptButton] = useContext(AuthContext);

  const title = useRef();
  const description = useRef();
  const taskDate = useRef();
  const assignTo = useRef();
  const category = useRef();

  const handeladminsubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title.current.value,
      description: description.current.value,
      taskDate: taskDate.current.value,
      category: category.current.value,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const currdata = [...userData];

    currdata.forEach((element) => {
      if (element.id == assignTo.current.value) {
        element.tasks.push(newTask);
        element.taskCounts.newTask += 1;
      }
    });
    setUserData(currdata);
    localStorage.setItem("employee", JSON.stringify(currdata));

    title.current.value = "";
    description.current.value = "";
    taskDate.current.value = "";
    assignTo.current.value = "";
    category.current.value = "";
  };
  return (
    <div>
      <div className="bg-gray-800 p-10 rounded-xl text-white flex mb-10 ">
        <div>
          <h1></h1>
          <form
            onSubmit={(e) => handeladminsubmit(e)}
            className="flex flex-col gap-2"
          >
            <div>
              <h2 className="text-3xl place-self-center mb-3">Create Task</h2>
            </div>
            <div>
              <label className="text-1xl " htmlFor="task-title">
                Task Title
              </label>{" "}
              <br />
              <input
                ref={title}
                className="bg-gray-700 p-2 mt-3 w-full rounded-xl"
                placeholder="Enter Task Title"
                type="text"
                id="task-title"
              />
            </div>
            <div>
              <label className="text-1xl " htmlFor="description">
                description
              </label>{" "}
              <br />
              <textarea
                ref={description}
                className="bg-gray-700 p-2 mt-3 rounded-xl"
                placeholder="Enter Task Title"
                type="text"
                id="description"
                cols={50}
                rows={5}
              />
            </div>
            <div>
              <label className="text-1xl " htmlFor="date">
                Date
              </label>{" "}
              <br />
              <input
                ref={taskDate}
                type="date"
                className="bg-gray-700 p-2 mt-3 w-full rounded-xl"
                id="date"
              />
            </div>
            <div>
              <label htmlFor="assign" className="text-1xl ">
                Assign to
              </label>{" "}
              <br />
              <input
                placeholder="Enter Employee id"
                ref={assignTo}
                className="bg-gray-700 p-2 mt-3 w-full rounded-xl"
                id="assign"
              />
            </div>
            <div>
              <label htmlFor="category" className="text-1xl ">
                Category
              </label>
              <br />
              <input
                placeholder="Dev, Clean, etc"
                ref={category}
                className="bg-gray-700 p-2 mt-3 w-full rounded-xl"
                id="category"
              />
            </div>
            <button
              type="submit"
              className="bg-black w-1/3 p-2 mt-2  rounded-xl place-self-center"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
