import Button from "./Button";
import AddUserIcon from "../CustomIcons/AddUserIcon";
import Exit from "../CustomIcons/Login";
import BurgerIcon from "../CustomIcons/Burger";
import SearchIcon from "../CustomIcons/SearchIcon";
import { NavLinkProps } from "../types";
import NavLinkList from "./NavLinkList";
import Language from "./Language";
import ThemeMode from "./ThemeMode";

const Header = ({ navLink }: NavLinkProps) => {
  return (
    <header
      className="pt-16 pb-5 bg-bg w-[100%] flex items-center flex-col 
                lg:flex-row lg:pr-[112px] lg:pl-[28px] lg:pt-5"
    >
      <div
        className="flex justify-center items-center gap-x-4 mb-4
                  lg:flex-row-reverse lg:mb-0 lg:gap-x-0"
      >
        <div className="relative">
          <input
            className="shadow-md rounded-2xl pl-[60px] py-[13px] bg-bg placeholder:text-textLink font-bold text-stroke text-shadow  border-[1px] border-bgSecond w-[293px]
                       lg:w-[480px] lg:mr-[192.5px]"
            type="text"
            placeholder="Пошук ігор"
          />
          <div className="absolute top-[25%] left-[24px]">
            <SearchIcon />
          </div>
        </div>
        <div className={`hidden lg:block lg:ml-[41.5px] lg:mr-[192.5px]`}>
          <NavLinkList navLink={navLink} />
        </div>
        <div className="relative">
          <BurgerIcon />
          <ThemeMode />
        </div>
      </div>
      <div className="lg:mr-8 hidden lg:block">
        <Language />
      </div>
      <div
        className="flex gap-x-4
                  lg:gap-x-8"
      >
        <Button title="Реєстрація" icon={<AddUserIcon />} stroke={true} />
        <Button title="Увійти" icon={<Exit />} bg />
      </div>
    </header>
  );
};

export default Header;
