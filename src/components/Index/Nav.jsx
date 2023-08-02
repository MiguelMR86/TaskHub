import React from "react";
import Logo from "../General/Others/Logo";
import AccountSettingsBtn from "../General/User-Log/AccountSettingsBtn";

function NavBar() {
  return (
    <nav className="flex justify-between items-center shadow-md h-[10vh] bg-white">
      <Logo />
      <div className="mr-4">
        <AccountSettingsBtn />
      </div>
    </nav>
  );
}

export default NavBar;
