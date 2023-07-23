import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";
import SpaceBtn from "../../General/Profile/Spaces/Buttons/SpaceBtn";
import { getUserSpaces } from "../../../controllers/spaces/functions";
import NewSpaceBtn from "../../General/Profile/Spaces/Buttons/NewSpaceBtn";
import DeleteSpaceBtn from "../../General/Profile/Spaces/Buttons/DeleteSpaceBtn";

function SideBarSpaces() {
  const [open, setOpen] = useState(false);
  const { spaces, setSpaces } = useContext(Context);
  
  const handleOpen = () => setOpen(!open);
  const handelOptions = () => getUserSpaces().then((spaces) => setSpaces(spaces));

  useEffect(() => {
    getUserSpaces().then((spaces) => {
      setSpaces(spaces);
    });
  }, []);

  return (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-2"
      >
        <Button
          variant="text"
          color="blue-gray"
          className="flex justify-between items-center gap-2 border"
          onClick={() => {handleOpen(), handelOptions()}}
        >
          <p className={` bg-blue-gray-500 text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${open ? "rotate-[-90deg]" : "rotate-[90deg]"} `}>
            &lt;
          </p>
          spaces
        </Button>
        <NewSpaceBtn />
        <DeleteSpaceBtn />
      </Typography>

      {open ? (
        <>
          <ul className="flex flex-col gap-1">
            {spaces.map((space) => (
              <SpaceBtn space={space} key={space.id} handleOpen={handleOpen} />
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </ul>
  );
}

export default SideBarSpaces;
