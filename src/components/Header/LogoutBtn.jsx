import { logout } from "../../../Store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutBtn;
