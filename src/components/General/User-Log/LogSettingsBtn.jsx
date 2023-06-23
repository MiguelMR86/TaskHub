import React, { useState, Fragment } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { signInWithGoogle } from "../../../controllers/user/functions";
import { auth } from "../../../config/firebase";


function LogSettings() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        className="w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full"
      >
        <AiOutlineUser className=" scale-[2.3]" />
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        
        <Card shadow={false} className="p-8">
          <Typography variant="h2" color="blue-gray" className="text-center">
            Login
          </Typography>
          <Typography color="gray" className="my-2 font-normal">
            {/* Choose your method to get started. */}
            Let's get started!
          </Typography>
            <div className="flex flex-col">
              <Button
                id="login-google-button"
                variant="outlined"
                color="blue-gray"
                className="flex items-center justify-center gap-3"
                onClick={signInWithGoogle}
              >
                <img
                  src={"google.svg"}
                  alt="metamask"
                  className="h-6 w-6"
                />
                Continue with Google
              </Button>
            </div>
        </Card>
      </Dialog>
    </Fragment>
  );
}

export default LogSettings;
