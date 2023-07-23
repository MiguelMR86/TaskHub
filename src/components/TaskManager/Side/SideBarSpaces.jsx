import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";
import SpaceBtn from "../../Spaces/Buttons/SpaceBtn";
import { getUserSpaces } from "../../../controllers/spaces/functions";
import NewSpaceBtn from "../../Spaces/Buttons/NewSpaceBtn";
import NewSpaceModal from "../../Spaces/Modals/NewSpaceModal";
import DeleteSpaceBtn from "../../Spaces/Buttons/DeleteSpaceBtn";

function SideBarSpaces() {
  const [open, setOpen] = useState(false);
  const { spaces, setSpaces } = useContext(Context);
  
  const handleOpen = () => setOpen(!open);
  const handelOptions = () => getUserSpaces().then((spaces) => setSpaces(spaces));

  useEffect(() => {
    getUserSpaces().then((spaces) => {
      setSpaces(spaces);
    });
  }, [spaces]);

  return (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
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
          <p className={`bg-[#2196F3] text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${open ? "rotate-[-90deg]" : "rotate-[90deg]"} `}>
            &lt;
          </p>
          <p className="text-[#2196F3]">
            spaces
          </p>
        </Button>
        <NewSpaceModal />
        <NewSpaceBtn />
        <DeleteSpaceBtn />
      </Typography>

      {open ? (
        <>
          <ul className="flex flex-col gap-2 max-h-[170px] overflow-y-auto">
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
