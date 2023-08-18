import { NavLinkProps } from "../types";

const NavLinkList = ({navLink}: NavLinkProps) => {
  return (
    <ul className="flex gap-x-4 justify-center">
      {navLink.map((link) => (
        <li
          className="cursor-pointer hover:text-textAccent text-textLink transition"
          key={link.pathname}
        >
          {link.id}
        </li>
      ))}
    </ul>
  );
};

export default NavLinkList;
