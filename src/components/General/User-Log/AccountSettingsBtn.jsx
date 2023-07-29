import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import LoginBtn from "./LoginBtn";
import { signOut } from "../../../controllers/user/functions";
import { auth } from "../../../config/firebase";

function AccountSettingsBtn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPhotoURL(user.photoURL);
      }
    });
  }, [auth?.currentUser]);

  return (
    <div className="relative">
      <Button
        className="w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full"
        onClick={handleOpen}
      >
        {auth?.currentUser ? (
          <img
            src={photoURL}
            alt="Google-Profile-Img"
            className=" rounded-full"
          />
        ) : (
          <AiOutlineUser size={30} />
        )}
      </Button>
      <div
        className={`absolute top-[60px] right-0 w-[250px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.2)]
         rounded-lg p-4 
        ${open ? "block" : "hidden"}`}
      >
        {auth?.currentUser ? (
          <div className="flex flex-col gap-4"
          >
            <a href="/manager">
              <Button fullWidth>Your Spaces</Button>
            </a>

            <Button onClick={signOut}>
              Logout
            </Button>
          </div>
        ) : (
          <LoginBtn />
        )}
      </div>
    </div>
  );
}

export default AccountSettingsBtn;
