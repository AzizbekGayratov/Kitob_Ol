import { Divider, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submitAuthData = () => {
    try {
    } catch (error) {
      console.error(error);
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
          onSubmit={(e) => {
            e.preventDefault();
            // submitAuthData();
          }}
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
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
