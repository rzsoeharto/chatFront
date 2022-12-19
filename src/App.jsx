import ChatPage from "./pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from "react";
import { checkAuthenticated, refresh } from "./actions/auth";
import Cookies from "universal-cookie";
import { AuthProvider } from "./context/AuthContext";
import RoomInput from "./pages/RoomInput";
import { ChatProvider } from "./context/ChatContext";

function App() {
  const cookies = new Cookies();
  const csrf = async () => {
    const response = await fetch("http://localhost:8000/chat/csrf/");
    const data = await response.json();
    cookies.set("csrfToken", data.csrfToken);
  };

  useEffect(() => {
    csrf();
    // checkAuthenticated();
    // refresh();
  }, []);
  return (
    <>
      <Router>
        <AuthProvider>
          <ChatProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/chat" element={<RoomInput />} /> */}
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </ChatProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
