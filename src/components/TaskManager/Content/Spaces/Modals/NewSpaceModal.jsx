import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import InputFile from "../../../../General/Others/InputFile";
import { createSpace } from "../../../../../controllers/spaces/functions";

function NewSpaceModal() {
  const { openCreateSpace, setOpenCreateSpace } = useContext(Context);

  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);
  const handleCreateSpace = (e) => {
    e.preventDefault();
    const name = document.getElementById("space-name").value;
    const img = document.getElementById("space-img").files[0];
    const space = { name, img };
    createSpace(space);
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
          <Input
            onChange={(e) => {
              if (e.target.value.length > 20)
                e.target.value = e.target.value.slice(0, 20);
            }}
            id="space-name"
            size="lg"
            label="Space Name"
            required
          />
          <InputFile id="space-img" required={true} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue-gray"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            id="space-submit"
            variant="gradient"
            color="blue"
            type="submit"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}

export default NewSpaceModal;
