import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const UserLogin = () => {
    setLoading(true);
    const apiKey = "AIzaSyCkzaIRSzY713bAesYM8l-10gubNCxBwVw";
    const formData = {
      email: email,
      password: password,
    };
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((out) => {
        if (out.error) {
          setLoading(false);
          setErr(out.error.message || "Something went wrong.");
        } else {
          console.log("Login Success:", out);
          localStorage.setItem("idToken", out.idToken);
          setLoading(false);
          navigate("/");
          window.location.reload()
        }
      })
      .catch((err) => setErr(err.message));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    UserLogin();
    // navigate("/");
  };
  console.log(err);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 md:w-1/4 w-full ">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        {err && <p className="text-red-500">{err}</p>}
        <form className="space-y-4" onSubmit={handleSignIn}>
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
            {loading ? "Logging in...." : "Login"}
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500">
              Signup
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
