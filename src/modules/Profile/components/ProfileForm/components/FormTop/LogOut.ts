import { useNavigate } from "react-router-dom";
import { Storage } from "../../../../../../Services";

const LogOut = () => {
  const navigate = useNavigate();

  const logoutFromProfile = async () => {
    Storage.clear();
    navigate("/authorization/phone");
  };

  logoutFromProfile();
};

export default LogOut;
