import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Login = () => {
  const [users, setUsers] = useState({});

  const [formUser, setFormUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (formUser.firstName.length > 0) {
      const newUser = [...users, formUser];
      setUsers(newUser);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(newUser));
    }

    // console.log(formUser);
    // if ((firstName, email, phone, message)) {
    //   setFormUser({
    //     firstName: firstName,
    //     email: email,
    //     phone: phone,
    //     message: message,
    //   });
    //   setUsers({ ...users, ...formUser });
    //   localStorage.setItem("user", JSON.stringify(users));
    //   setFirstName("");
    //   setEmail("");
    //   setPhone("");
    //   setMessage("");

    //console.log(users);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
    console.log(formUser);
  };

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser > 0) {
      setUsers(getUser);
    }
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />

      <div className="py-[100px] px-5 lg:px-[200px]">
        <div className="p-5 lg:p-10 card">
          <h1 className="text-[25px] lg:text-[40px] font-bold text-center font-mono">
            Login
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex flex-col justify-between space-y-4">
              <div className="w-[90%] flex flex-col">
                <label htmlFor="" className="text-[18px] lg:text-[25px]">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formUser.email}
                  onChange={handleInput}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:text-[20px]"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-[90%] flex flex-col">
                <label htmlFor="" className="text-[18px] lg:text-[25px]">
                  Password
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formUser.password}
                  onChange={handleInput}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:text-[20px]"
                  placeholder="Enter Password"
                />
              </div>

              <div className="mt-5 px-5 flex justify-between">
                <h1>Forgot password?</h1>
                <Link to="/SignUp">
                  <h1>Sign Up</h1>
                </Link>
              </div>
            </div>

            <div className="mt-5 lg:mt-10">
              <button className="w-full h-fit py-2 px-10 lg:py-3 lg:px-5 text-[13px] lg:text-[40px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};
