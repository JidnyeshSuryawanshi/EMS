import React from "react";

export default function NewTask({  data, handelAccept }) {
  
  const handelOnAcceptClick = () => {
    handelAccept();
  };

  return (
    <div>
      <div className="flex flex-col flex-shrink-0 h-full w-[300px] bg-yellow-500 p-3 gap-2 rounded-xl relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold bg-[#003366] p-2 rounded-xl">
            {data.category}
          </h2>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className="text-2xl">{data.title}</h2>
        <p>{data.description}</p>
        <div className="flex flex-row mt-3 gap-2">
          <button
            onClick={() => handelOnAcceptClick(true)}
            className="bg-[#003366] py-1 px-3 rounded absolute bottom-5 left-[40%]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
