import { Outlet, useNavigate } from "react-router-dom";
import { Storage } from "../../../Services";
import { useEffect } from "react";

export default function PublisherRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Storage.get("publisher_token")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
