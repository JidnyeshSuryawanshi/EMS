import React from 'react'

export default function FailedTask({data}) {
  return (
    <div>
      <div className="flex flex-col flex-shrink-0 h-full w-[300px] bg-red-500 p-3 gap-2 rounded-xl relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold bg-[#003366] p-2 rounded-xl">
            {data.category}
          </h2>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className="text-2xl">{data.title}</h2>
        <p>
          {data.description}
        </p>
        <div className="flex flex-row mt-3 gap-2 mx-auto">
          <button className="bg-red-700 p-1 rounded absolute bottom-5 left-[40%] py-1 px-3">Failed</button>
        </div>
      </div>
    </div>
  )
}
