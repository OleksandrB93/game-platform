import Facebook from "../CustomIcons/FacebookIcon";
import InstaIcon from "../CustomIcons/InstaIcon";
import { NavLink } from "../types";
interface NavLinkProps {
  navLink: NavLink[];
}

const Footer = ({ navLink }: NavLinkProps) => {
  return (
    <div className="bg-outline pt-10">
      <ul className="flex gap-x-6 justify-center">
        {navLink.map((link) => (
          <li
            className="cursor-pointer hover:text-textAccent transition"
            key={link.pathname}
          >
            {link.id}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center py-8 gap-x-8">
        <Facebook />
        <InstaIcon />
      </div>
      <div className="flex justify-center gap-1">
        <button
          className="hover:text-textAccent transition font-medium"
          type="button"
        >
          UA
        </button>
        <button
          className="hover:text-textAccent transition font-medium"
          type="button"
        >
          EN
        </button>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/imgs/companies.png"}
        className="uppercase text-textAccent mx-auto py-8"
      />
      <p className="flex justify-center pb-10 text-xs">2015-2023</p>
    </div>
  );
};

export default Footer;
