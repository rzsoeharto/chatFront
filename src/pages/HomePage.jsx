import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function HomePage() {
  const { userEmail, authToken } = useContext(AuthContext);
  return (
    <>
      <div className="flex flex-col w-full h-full place-content-center px-8 space-y-6">
        <Link
          to="/chat"
          className="bg-white w-1/12 text-black rounded py-3 pl-2 hover:bg-black hover:text-white"
        >
          Chats
        </Link>
        {!userEmail ? (
          <Link
            to="/login"
            className="bg-white w-1/12 text-black rounded py-3 pl-2 hover:bg-black hover:text-white"
          >
            Login
          </Link>
        ) : (
          <p>hi {userEmail}</p>
        )}
        <Link
          to={"/create-listing"}
          className="bg-white w-1/12 text-black rounded py-3 pl-2 hover:bg-black hover:text-white"
        >
          Listing
        </Link>
      </div>
    </>
  );
}

export default HomePage;
