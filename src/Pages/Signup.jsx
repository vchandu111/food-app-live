import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const createUser = () => {
    setLoading(true);
    const apiKey = "AIzaSyCkzaIRSzY713bAesYM8l-10gubNCxBwVw";
    const formData = {
      email: email,
      password: password,
    };
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((out) => {
        console.log(out);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    createUser();
    navigate('/login')
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 md:w-1/4 w-full ">
        <h1 className="text-4xl font-bold text-center mb-6">Signup</h1>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="space-y-2">
            <label className="text-lg text-gray-700" for="">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 w-11/12 rounded-lg px-4 py-2"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg text-gray-700" for="">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 w-11/12 rounded-lg px-4 py-2"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg text-gray-700" for="">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 w-11/12 rounded-lg px-4 py-2"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-orange-500 w-11/12 py-2 rounded-xl text-white">
            {loading ? "Signing up...." : "Signup"}
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
