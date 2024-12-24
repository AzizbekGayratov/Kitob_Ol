import { Outlet, useNavigate } from "react-router-dom";
import { Storage } from "../../../Services";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Storage.get("token") && !Storage.get("publisher_token")) {
      navigate("/authorization/phone");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
