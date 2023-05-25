import { Navbar } from "@material-tailwind/react";
import SideBarBtn from '../Side/SideBarBtn.jsx'
import NavList from './NavList.jsx'

export default function NavBar() {
  return (
    <Navbar color="transparent" className="w-full bg-white border-4 border-[#DCDCDC] rounded-lg" fullWidth={true}>
      <div className="flex flex-wrap tablet:flex-nowrap items-center gap-4 gap-y-8 text-blue-gray-900">
        <SideBarBtn />
        <hr className="border-2 rounded-full w-full tablet:hidden"/>
        <NavList />
      </div>
    </Navbar>
  );
}