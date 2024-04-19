import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Oauthsignout from "./Oauthsignout";
import { Login } from "@mui/icons-material";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);

const handleclick = () =>{
    setIsHovered(!isHovered)
}

  return (
    isAuthenticated && (
      <div className="relative inline-block">
        <img
          src={user.picture}
          alt={user.name}
          className="h-10 w-10 ml-0 cursor-pointer"
          onClick={handleclick}

   
        />
        {isHovered && (
          <div
            className="absolute top-full left-[-350%] transform -translate-x-1/2 bg-white border border-gray-200 shadow-md rounded-lg p-8 z-10"
            style={{ minWidth: "200px" }}
          >
            <div className="flex items-center mb-4 mr-2">
              <img
                src={user.picture}
                alt={user.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold mr-3">{user.name}</p>
                <p className="text-gray-500 text-sm mr-3">{user.email}</p>
              </div>
            </div>
            <hr className="my-2 border-t border-gray-200" />
            <div className="flex justify-between">

              <Login ></Login>
              <div className="mr-[110px]">
              <Oauthsignout />
                </div>
               
              
              <button
                className="text-blue-500 text-sm focus:outline-none"
                onClick={() => alert("Settings clicked")}
              >
                Settings
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
