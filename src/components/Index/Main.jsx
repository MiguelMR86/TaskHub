import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
    Typography,
    Button,
    Card
} from "@material-tailwind/react";
import { BsHouseAdd } from "react-icons/bs";

function LoginCard() {
    const { signInWithGoogle, user } = useContext(Context);
    const handelRedirect = () => window.location.href = "/manager";

    return (
        <div id="index-bg" className="w-full h-[90vh] flex justify-center items-center">
            <Card className="w-full sm:w-[60%] p-8 border mx-4">
                <Typography variant="h2" color="blue-gray" className="text-center mb-4">
                    Let's get started!
                </Typography>
               
                <div className="flex flex-col">
                    {!user ? (
                        <Button
                            id="login-google-button"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center justify-center gap-3 bg-white"
                            onClick={signInWithGoogle}
                        >
                            <img src={"google.svg"} alt="metamask" className="h-6 w-6" />
                            Continue with Google
                        </Button>
                    ) : (
                        <Button
                            onClick={handelRedirect}
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center justify-center gap-3 bg-white"
                            fullWidth>
                            <BsHouseAdd size={20} />
                            Your Spaces
                        </Button>
                    )}
                </div>
            </Card>
        </div>

    )
}

export default LoginCard