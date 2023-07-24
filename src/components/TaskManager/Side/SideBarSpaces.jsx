import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";
import SpaceBtn from "../Content/Spaces/Buttons/SpaceBtn"
import { getUserSpaces } from "../../../controllers/spaces/functions";
import NewSpaceBtn from "../Content/Spaces/Buttons/NewSpaceBtn";
import NewSpaceModal from "../Content/Spaces/Modals/NewSpaceModal";
import DeleteSpaceBtn from "../Content/Spaces/Buttons/DeleteSpaceBtn";

function SideBarSpaces() {
  const { spaces, setSpaces, openSpaces, handelSpacesMenu } = useContext(Context);
  
  const handelGetSpaces = () => getUserSpaces().then((spaces) => setSpaces(spaces));

  useEffect(() => {
    handelGetSpaces();
  }, []);

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
          onClick={() => {handelSpacesMenu(), handelGetSpaces()}}
        >
          <p className={`bg-[#2196F3] text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${openSpaces ? "rotate-[-90deg]" : "rotate-[90deg]"} `}>
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

      {openSpaces ? (
        <>
          <ul className="flex flex-col gap-2 max-h-[110px] overflow-y-auto">
            {spaces.map((space) => (
              <SpaceBtn space={space} key={space.id} />
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
