import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";
import SpaceBtn from "../Content/Spaces/Buttons/SpaceBtn";
import NewSpaceBtn from "../Content/Spaces/Buttons/NewSpaceBtn";
import NewSpaceModal from "../Content/Spaces/Modals/NewSpaceModal";
import DeleteSpaceBtn from "../Content/Spaces/Buttons/DeleteSpaceBtn";

function SideBarSpaces() {
  const { spaces, openSpaces, handelSpacesMenu } = useContext(Context);

  return (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
        variant="small"
        color="black"
        className="flex items-center gap-2"
      >
        <Button
          name="menu-spaces-button"
          fullWidth
          variant="text"
          color="blue-gray"
          className="flex justify-center items-center gap-2 border hover:bg-blue-gray-100 bg-white"
          onClick={() => {
            handelSpacesMenu()
          }}
        >
          <p
            className={`bg-[#2196F3] text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${
              openSpaces ? "rotate-[-90deg]" : "rotate-[90deg]"
            } `}
          >
            &lt;
          </p>
          <p className="text-[#2196F3]">spaces</p>
        </Button>
        <NewSpaceModal />
        <NewSpaceBtn />
      </Typography>

      {openSpaces ? (
        <>
          {spaces.length > 0 ? (
            <ul className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
              {spaces.map((space) => (
                <SpaceBtn space={space} key={space.id} />
              ))}
            </ul>
          ) : (
            <p className=" text-blue-gray-500 ml-4 text-sm">
              You don't have any space yet ...
            </p>
          )}
        </>
      ) : (
        <></>
      )}
    </ul>
  );
}

export default SideBarSpaces;
