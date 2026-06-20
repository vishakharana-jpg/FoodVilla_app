import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-orange-200 text-orange-500 font-bold text-sm hover:bg-orange-50 hover:border-orange-400 active:scale-95 transition-all duration-200"
        >
          <span className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-sm">
            👤
          </span>
          Log Out
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-sm active:scale-95 transition-all duration-200 shadow-md shadow-orange-200"
        >
          <span>🔑</span>
          Log In
        </button>
      )}
    </>
  );
};