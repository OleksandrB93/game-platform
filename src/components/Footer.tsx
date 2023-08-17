import Facebook from "../CustomIcons/FacebookIcon";
import InstaIcon from "../CustomIcons/InstaIcon";
import { NavLinkProps } from "../types";
import Language from "./Language";
import NavLinkList from "./NavLinkList";

const Footer = ({ navLink }: NavLinkProps) => {
  return (
    <div className="bg-[#d9e4f9]  pt-10">
      <div className="lg:flex lg:gap-x-[598px] lg:mx-[112px]">
        <div className="lg:flex lg:flex-row-reverse lg:gap-x-[598px]">
          <div className="lg:my-auto lg:text-sm">
            <NavLinkList navLink={navLink} />
          </div>
          <div className="flex justify-center items-center py-8 gap-x-8 lg:gap-x-16">
            <Facebook />
            <InstaIcon />
          </div>
        </div>
        <Language />
      </div>
      <img
        src={process.env.PUBLIC_URL + "/imgs/companies.png"}
        alt=""
        className=" text-textAccent mx-auto py-8 lg:hidden"
      />
      <img
        src={process.env.PUBLIC_URL + "/imgs/companiesLG.png"}
        alt=""
        className=" text-textAccent mx-auto py-8 hidden lg:block"
      />
      <p className="flex justify-center pb-10 text-xs">2015-2023</p>
    </div>
  );
};

export default Footer;
