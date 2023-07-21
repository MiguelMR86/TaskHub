import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { MenuItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function SpaceBtn({ space, handleOpen }) {
  const { setCurrentSpace } = useContext(Context);

  return (
    <MenuItem
      key={space.id}
      onClick={() => {
        setCurrentSpace(space);
        handleOpen(null);
      }}
    >
      <Link
        to={`/manager/space/${space.id}`}
        className="flex justify-between items-center h-12"
      >
        <p>{space.name}</p>
        <img
          src={space.url}
          alt={space.name}
          className="w-8 h-8 rounded-full"
        />
      </Link>
    </MenuItem>
  );
}

export default SpaceBtn;
