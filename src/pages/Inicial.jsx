import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MainContainer } from "../styles/pages/Inicial.styled";

const Inicial = () => {
  const { setIsOpened } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setIsOpened(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <MainContainer>Conteudo da página inicial</MainContainer>;
};

export default Inicial;
