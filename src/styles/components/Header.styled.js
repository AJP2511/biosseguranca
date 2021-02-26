import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;

export const TextContainer = styled.div``;

export const NavContainer = styled.nav`
  backdrop-filter: blur(1.5px);
  position: absolute;
  top: 50px;
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 120px;
  transition: all .4s ease;
  transform: translateX(-100px);
  align-items: center;
  padding: 1.5rem;
  height: calc(100vh - 50px);

  &:hover{
    transform: translateX(0)
  }

  &::after{
    content:"";
    width:20px;
    height:100%;
    background-color: ${(props) => props.theme.secondary};
    position: absolute;
    right:0;
    top: 0;
  }



  @media(max-width: 720px){
    width: 100%;
    transform: ${(props) =>
      props.opened ? "translateX(0)" : "translateX(-740px)"};
    font-size: 2rem;

      &:hover{
        transform: none;
      }
  }
  

  }
`;
