import { FC } from "react";
import Button from "./Button";
import AddUserIcon from "../CustomIcons/AddUserIcon";
import Exit from "../CustomIcons/Login";
import BurgerIcon from "../CustomIcons/Burger";
import SearchIcon from "../CustomIcons/SearchIcon";

const Header: FC = () => {
  return (
    <div className="pt-16 pb-5 bg-bg w-[100vw] flex items-center  flex-col ">
      <div className="flex gap-x-4 mb-4">
        <div className="relative">
          <input
            className="shadow-md rounded-2xl pl-[60px] py-[13px] bg-bg border-[1px] border-[#AECBFF] w-[293px]"
            type="text"
            placeholder="Пошук ігор"
          />
          <div className="absolute top-[25%] left-[24px]">
            <SearchIcon />
          </div>
        </div>
        <BurgerIcon />
      </div>
      <div className="flex gap-x-4">
        <Button title="Реєстрація" icon={<AddUserIcon />} />
        <Button title="Увійти" icon={<Exit />} bg />
      </div>
    </div>
  );
};

export default Header;
