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
  const { openSpaceSelector, spaces, handleOpenSpaceSelector } = useContext(Context);

  return (
    <Dialog
      open={openSpaceSelector}
      handler={handleOpenSpaceSelector}
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
              <SpaceBtn space={space} key={space.id} handleOpen={handleOpenSpaceSelector} />
            ))}
          </ul>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="gray"
          onClick={() => handleOpenSpaceSelector(null)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default SpaceSelectorModal;
