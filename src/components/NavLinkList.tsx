import { useTranslation } from "react-i18next";
import { NavLinkProps } from "../types";
import { Key } from "react";

const NavLinkList = ({ navLink }: NavLinkProps) => {
  const { t } = useTranslation();

  return (
    <ul className="flex gap-x-4 justify-center">
      {navLink.map((linkId: Key | null | undefined) => (
        <li
          className="cursor-pointer hover:text-textAccent text-textLink transition"
          key={linkId}
        >
          {t(`navLinkList.${linkId}`)}
        </li>
      ))}
    </ul>
  );
};

export default NavLinkList;
