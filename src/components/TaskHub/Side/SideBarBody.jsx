import React from "react";

function SideBarBody() {

  return (
    <ul className="my-2 w-full flex flex-col gap-4">
      <li>
        <a
          className="w-24 p-[10px] border grid place-items-center cursor-pointer rounded-md text-gray-700 text-base hover:shadow-lg hover:bg-gray-200 transition-all"
          name="home-button"
          variant="text"
          color="blue-gray"
          href="/manager"
        >
          Manager
        </a>
      </li>
      {/* <li>
        <a
          className="w-24 p-[10px] border grid place-items-center cursor-pointer rounded-md text-gray-700 text-base hover:shadow-lg hover:bg-gray-200 transition-all"
          name="info-button"
          variant="text"
          color="blue-gray"
          href="/#taskHub-info"
        >
          Info
        </a>
      </li> */}
    </ul>
  );
}

export default SideBarBody;
