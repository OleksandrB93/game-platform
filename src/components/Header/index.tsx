import { FC } from "react";
import Burger from "../Burger";
import Button from "../Button";
import * as s from "./styles";

const Header: FC  = () => {
  return (
    <s.HeaderContainer>
      <input type="text" placeholder="Пощук ігор" />
      <Burger />
      <Button/>
      <Button/>
    </s.HeaderContainer>
  );
};

export default Header;
