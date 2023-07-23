import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { TbWorldUpload } from "react-icons/tb";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import InputFile from "../../../Others/InputFile";
import { createSpace } from "../../../../../controllers/spaces/functions";

function NewSpaceBtn() {
  const { openCreateSpace, setOpenCreateSpace } = useContext(Context);
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);

  const handleCreateSpace = (e) => {
    e.preventDefault();
    console.log("Creating space...");
    const name = document.getElementById("space-name").value;
    const description = document.getElementById("space-description").value;
    const img = document.getElementById("space-img").files[0];
    const space = { name, description, img };
    createSpace(space);
    handleOpen(null);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center border p-4"
      >
        <TbWorldUpload className="scale-[2]" />
      </Button>

      <Dialog
        open={openCreateSpace}
        handler={handleOpen}
        size="md"
        className="w-full max-w-md"
      >
        <DialogHeader>Create a new Space</DialogHeader>
        <form onSubmit={handleCreateSpace}>
          <DialogBody divider className="flex flex-col gap-3">
            <Input id="space-name" size="lg" label="Space Name" required />
            <Textarea id="space-description" label="Description" />
            <InputFile id="space-img" required={true} />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="blue-gray"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" type="submit">
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default NewSpaceBtn;
