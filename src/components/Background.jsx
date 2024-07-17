import CreatePost from "./CreatePost";
import { Button } from "./Index";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";
function Background() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <header className="h-20 w-full text-zinc-600 ">
        <div className="w-full max-w-md mx-auto py-4 flex gap-10">
          <CreatePost />
          <Button className="" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <div className="fixed w-full h-screen z-[2]">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tight leading-none font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
