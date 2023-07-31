import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { MenuItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { getUserTasks } from "../../../../../controllers/firebase";

function SpaceBtn({ space }) {
  const { setCurrentSpace, handelSpacesMenu, setTasks } = useContext(Context);
  const handelGetTasks = () => getUserTasks(space.id).then((tasks) => setTasks(tasks));

  return (
    <MenuItem
      name="space-button"
      className="text-blue-gray-500 border hover:bg-blue-gray-100"
      key={space.id}
      onClick={() => {
        setCurrentSpace(space);
        handelSpacesMenu(null);
        handelGetTasks();
      }}
    >
      <Link
        to={`/manager/space/${space.id}`}
        className="flex justify-between items-center"
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
