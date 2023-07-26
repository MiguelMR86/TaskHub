import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import SpaceBtn from "../Buttons/SpaceBtn";
import SpaceSelectorBtn from "../Buttons/SpaceSelectorBtn";

function SpaceSelectorModal() {
  const { openSpaceSelector, setOpenSpaceSelector, spaces } = useContext(Context);

  const handleOpen = () => setOpenSpaceSelector(!openSpaceSelector);

  return (
    <Dialog
      open={openSpaceSelector}
      handler={handleOpen}
      size="md"
      className="w-full max-w-md"
    >
      <DialogHeader>Choose your Space</DialogHeader>

      <DialogBody divider className="overflow-y-auto h-[250px]">
        {spaces.length === 0 ? (
          <SpaceSelectorBtn />
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
    </Dialog>
  );
}

export default SpaceSelectorModal;
