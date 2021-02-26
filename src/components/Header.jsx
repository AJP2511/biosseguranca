import React from "react";
import {
  MainContainer,
  IconContainer,
  TextContainer,
  NavContainer,
} from "../styles/components/Header.styled";
import { FaBiohazard, FaBars, FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  const handleMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <MainContainer>
      <IconContainer onClick={handleMenu}>
        {isOpened ? <FaWindowClose /> : <FaBars />}
      </IconContainer>
      <TextContainer>
        <NavLink to="/" exact>
          <p>
            <FaBiohazard />
            Biossegurança RAD15-N
          </p>
        </NavLink>
      </TextContainer>
      <NavContainer opened={isOpened}>
        <NavLink to="/page1" onClick={handleCloseMenu}>
          Página 1
        </NavLink>
        <NavLink to="/page2" onClick={handleCloseMenu}>
          Página 2
        </NavLink>
        <NavLink to="/page3" onClick={handleCloseMenu}>
          Página 3
        </NavLink>
      </NavContainer>
    </MainContainer>
  );
};

export default Header;
