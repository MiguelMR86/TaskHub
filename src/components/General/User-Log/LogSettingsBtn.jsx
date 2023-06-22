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
        <Card shadow={false} className="p-4 w-fit">
          <Typography variant="h2" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="flex flex-col">
              <Button id="login-button" className="mt-6 mb-4 p-4" type="submit">
                Login
              </Button>
              <Button
                id="login-google-button"
                variant="outlined"
                color="blue-gray"
                className="flex  items-center justify-center gap-3"
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
          </form>
        </Card>
      </Dialog>
    </Fragment>
  );
}

export default LogSettings;
