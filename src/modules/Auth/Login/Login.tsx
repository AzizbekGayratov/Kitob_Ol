import { Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem("publisher_token");
    if (isLogged) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/publisher/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Response failed");
      }

      const data = await response.json();
      localStorage.setItem("publisher_token", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="h-screen flex sm:items-center justify-center">
      <div className="w-full bg-white rounded max-w-[816px]">
        <div className="flex justify-between items-center px-4 py-5 sm:px-20 sm:py-9">
          <h1 className="text-[28px] font-semibold leading-[34px]">Log in</h1>
          <Link to="/register">
            <button className="rounded bg-primary bg-opacity-10 transition-opacity py-3 px-6 text-primary hover:bg-opacity-40 text-[16px] leading-[19px]">
              Register
            </button>
          </Link>
        </div>
        <Divider sx={{ opacity: 0.2, backgroundColor: "#2C3033" }} />
        <form
          onSubmit={handleSubmit}
          className="sm:px-20 px-4 pt-10 sm:h-auto flex flex-col justify-between h-[85vh] sm:pb-[100px] pb-20"
        >
          <div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
              <TextField
                label="Log in"
                variant="outlined"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <div className="flex">
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="-ml-10 mt-[15px] z-30 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <RiEyeCloseLine size={24} />
                  ) : (
                    <RiEyeLine size={24} />
                  )}
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="text-[#0066FF] text-[16px] hover:underline font-light leading-[19px] inline-block mt-10 sm:mb-20"
            >
              Malumotlarni unutdingizmi?
            </Link>
          </div>

          <button className="text-white hover:bg-opacity-80 transition-opacity w-full text-center py-4 bg-primary rounded text-[20px] leading-[24px]">
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
