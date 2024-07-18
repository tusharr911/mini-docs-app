import "./App.css";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";
import { useLocation } from "react-router-dom";
import authService from "./appwrite/auth";
import { initializeTodos } from "../Store/TodoSlice";
function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function logoutSession() {
      if (location.pathname !== "/notes") {
        await authService.logout();
        dispatch(logout());
        dispatch(initializeTodos({ todoArray: [] }));
      }
    }
    logoutSession();
  }, [location.pathname, dispatch]);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <main>
        <Background />
        <Foreground />
      </main>
    </div>
  );
}

export default App;
