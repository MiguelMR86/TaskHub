import React, { useState, Fragment, useContext } from "react";
import { Context } from "../../../context/Context";
import { Button, Dialog, Card, Typography } from "@material-tailwind/react";

function LoginBtn() {
  const { signInWithGoogle } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <Fragment>
      <Button color="white" fullWidth onClick={handleOpen}>Login</Button>

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
              <img src={"google.svg"} alt="metamask" className="h-6 w-6" />
              Continue with Google
            </Button>
          </div>
        </Card>
      </Dialog>
    </Fragment>
  );
}

export default LoginBtn;
