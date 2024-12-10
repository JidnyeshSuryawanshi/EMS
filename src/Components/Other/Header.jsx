import React, { useState } from "react";

export default function Header({ setUser, data }) {

  const handelOnLogOutClick = () => {
    localStorage.setItem("loggedInUser", "");
    setUser("");
  };

  return (
    <div className="flex flex-row items-end justify-between p-10 bg-gray-900">
      <h2 className="text-2xl font-semibold text-white">
        Hello, <br /> {data.firstName} 😊
      </h2>
      <button
        onClick={handelOnLogOutClick}
        className="bg-white text-black px-3 py-2 border-none rounded-2xl font-bold "
      >
        Log Out
      </button>
    </div>
  );
}
