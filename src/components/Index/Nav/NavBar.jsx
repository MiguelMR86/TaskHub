import React from "react";
import Logo from "../../General/Others/Logo";
import LogSettingsBtn from "../../General/User-Log/LogSettingsBtn";

function NavBar() {
  return (
    <nav className="flex justify-between items-center shadow-md h-[11vh] mb-10 rounded-lg bg-white border-4 border-[#DCDCDC]">
      <Logo />
      <div className="mr-4">
        <LogSettingsBtn />
      </div>
    </nav>
  );
}

export default NavBar;
