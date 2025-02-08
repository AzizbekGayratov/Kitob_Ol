import { Outlet, useNavigate } from "react-router-dom";
import { Storage } from "../../../Services";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const navigate = useNavigate();

  const rawProfile = sessionStorage.getItem("profile");
  const profile = rawProfile ? JSON.parse(rawProfile) : null;

  useEffect(() => {
    if (!Storage.get("token") && !Storage.get("publisher_token") && !profile) {
      navigate("/authorization/phone");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
