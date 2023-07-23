import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import InputFile from "../../../../General/Others/InputFile"
import { createSpace } from "../../../../../controllers/spaces/functions";
import { getUserSpaces } from "../../../../../controllers/spaces/functions";

function NewSpaceModal() {
  const { openCreateSpace, setOpenCreateSpace, setSpaces, setOpenSpaces } = useContext(Context);
  
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);
  const handleCreateSpace = (e) => {
    e.preventDefault();
    const name = document.getElementById("space-name").value;
    const description = document.getElementById("space-description").value;
    const img = document.getElementById("space-img").files[0];
    const space = { name, description, img };
    createSpace(space);
    getUserSpaces().then((spaces) => {
      setSpaces(spaces); 
      setOpenSpaces(false)
    }
    );
    handleOpen(null);
  };

  return (
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
            onClick={() => handleOpen()}
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
  );
}

export default NewSpaceModal;
