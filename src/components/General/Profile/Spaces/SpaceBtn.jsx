import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { MenuItem  } from "@material-tailwind/react";

function SpaceBtn({space, handleOpen}) {
    const { setCurrentSpace } = useContext(Context);

  return (
    <MenuItem 
      key={space.id}
      onClick={() => {
        setCurrentSpace(space);
        handleOpen(null);
      }}
      className="flex justify-between items-center h-12"
    >
      {space.name}
      <img src={space.url} alt={space.name} className="w-8 h-8 rounded-full" />
    </MenuItem >
  );
}

export default SpaceBtn;
