import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

function AccountSettingsBtn() {
  const { signOut, user } = useContext(Context);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative">
      <Button
        className="w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full"
        onClick={handleOpen}
      >
        {user ? (
          <img
            src={user.photoURL}
            alt="Google-Profile-Img"
            className=" rounded-full"
          />
        ) : (
          <AiOutlineUser size={30} />
        )}
      </Button>
      <div
        className={`absolute top-[60px] right-0 z-10 w-[250px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.2)]
         rounded-lg p-4 
        ${open && user ? "block" : "hidden"}`}
      >
        {user ? (
          <div className="flex flex-col gap-4"
          >
            <Button onClick={signOut}>
              Logout
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AccountSettingsBtn;
