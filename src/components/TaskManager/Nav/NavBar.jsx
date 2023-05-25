import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import SideBarBtn from '../Side/SideBarBtn.jsx'

export default function NavBar() {
  return (
    <Navbar color="transparent" className="w-full bg-white border-4 border-[#DCDCDC] rounded-lg" fullWidth={true}>
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <SideBarBtn />
        
        {/*  */}

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}