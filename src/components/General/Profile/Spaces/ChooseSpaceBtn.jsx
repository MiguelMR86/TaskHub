import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../context/Context";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BiWorld } from "react-icons/bi";
import { getUserSpaces } from "../../../../controllers/spaces/functions";
import SpaceBtn from "./SpaceBtn";

function YourSpacesBtn() {
  const { openSpacesSelector, setOpenSpacesSelector } = useContext(Context);
  const [spaces, setSpaces] = useState([]);
  const handleOpen = () => setOpenSpacesSelector(!openSpacesSelector);
  const handelOptions = () => getUserSpaces().then((spaces) => setSpaces(spaces));

  useEffect(() => {
    getUserSpaces().then((spaces) => {
      setSpaces(spaces);
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => { 
          handleOpen()
          handelOptions()
        }}
        fullWidth
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center"
      >
        Your spaces
        <BiWorld className="scale-[2]" />
      </Button>

      <Dialog
        open={openSpacesSelector}
        handler={handleOpen}
        size="md"
        className="w-full max-w-md"
      >
        <DialogHeader>Choose your Space</DialogHeader>
        <form>
          <DialogBody divider className="overflow-y-auto h-[250px]">
            {spaces.length === 0 ? (
              <p>You don't have any space yet</p>
            ) : (
              <ul className="flex flex-col gap-1">
                {spaces.map((space) => (
                  <SpaceBtn space={space} key={space.id} handleOpen={handleOpen} />
                ))}
              </ul>
            )}

          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="gray"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default YourSpacesBtn;
