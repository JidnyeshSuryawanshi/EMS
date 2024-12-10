import React, { useRef } from "react";

export default function Login({ handelLogin }) {
  const emailRef = useRef();
  const passRef = useRef();

  const handelOnSubmit = (e) => {
    e.preventDefault();
    handelLogin(emailRef.current.value, passRef.current.value);
    emailRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center place-content-center bg-gray-900">
      <div className="border-2 w-1/3 p-10 rounded-xl bg-gray-800">
        <form onSubmit={(e) => handelOnSubmit(e)}>
          <h3 className="text-center text-white text-3xl mb-10">Login</h3>
          <div className="flex flex-col gap-6">
            <input
              ref={emailRef}
              required
              className="p-3 mx-4 border rounded-2xl border-white"
              type="email"
              placeholder="Email"
            />
            <input
              ref={passRef}
              required
              className="p-3 mx-4 border rounded-2xl border-white"
              type="password"
              placeholder="Password"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-black w-40 pt-2 pb-2 border-none rounded-2xl"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
