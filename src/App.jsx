import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";
import EmployeeDashBoard from "./Components/DashBoard/EmployeeDashBoard";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const [userData, setUserData] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  const handelLogin = (email, password) => {
    if (email === "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.password == password && e.email == email
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Login");
    }
  };
  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user === "employee" ? (
        <EmployeeDashBoard setUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
      {user === "admin" ? <AdminDashBoard setUser={setUser} /> : ""}
    </>
  );
}

export default App;