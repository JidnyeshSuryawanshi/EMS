import React from "react";

export default function CompleteTask({ handelRemove, data }) {
  const handelRemoveFromList = (title) => {
    handelRemove(title);
  };

  return (
    <div>
      <div className="flex flex-col flex-shrink-0 h-full w-[300px] bg-green-500 p-3 gap-2 rounded-xl relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold bg-yellow-400 p-2 rounded-xl">
            {data.category}
          </h2>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className="text-2xl">{data.title}</h2>
        <p>{data.description}</p>
        <div className="flex flex-row mt-3 gap-2 mx-auto">
          <button
            onClick={() => handelRemoveFromList(data.title)}
            className="bg-purple-600 p-1 rounded place-self-center absolute bottom-5 left-[30%]"
          >
            Delete From List
          </button>
        </div>
      </div>
    </div>
  );
}
