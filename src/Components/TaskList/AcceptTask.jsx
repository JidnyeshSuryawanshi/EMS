import React from "react";

export default function AcceptTask({
  autoDelete,
  handelFailed,
  handelCompleted,
  data,
}) {
  const handelOnCompletedClick = () => {
    handelCompleted();
  };

  const handelOnFailedClick = () => {
    handelFailed();
  };
  autoDelete();

  return (
    <div>
      <div className="flex flex-col flex-shrink-0 h-full w-[300px] bg-blue-500 p-3 gap-2 rounded-xl relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold bg-[#003366] p-2 rounded-xl">
            {data.category}
          </h2>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className="text-2xl">{data.title}</h2>
        <p>{data.description}</p>
        <div className="flex flex-row mt-3 gap-2 absolute bottom-5">
          <button
            className="bg-green-600 p-1 rounded"
            onClick={handelOnCompletedClick}
          >
            Mark as Completed
          </button>
          <button
            onClick={handelOnFailedClick}
            className="bg-red-600 p-1 rounded"
          >
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
}
