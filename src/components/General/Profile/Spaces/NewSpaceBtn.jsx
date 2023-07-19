import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { TbWorldUpload } from "react-icons/tb";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea 
} from "@material-tailwind/react";

function NewSpaceBtn() {
  const { openCreateSpace, setOpenCreateSpace } = useContext(Context);
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);
  return (
    <>
      <Button
        onClick={handleOpen}
        fullWidth
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center"
      >
        New space
        <TbWorldUpload className="scale-[2]" />
      </Button>

      <Dialog
        open={openCreateSpace}
        handler={handleOpen}
        size="md"
        className="w-full max-w-md"
      >
        <DialogHeader>Create a new Space</DialogHeader>
        <DialogBody divider className="flex flex-col gap-3">
          <Input size="lg" label="Space Name" />
          <Textarea label="Description" />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default NewSpaceBtn;
