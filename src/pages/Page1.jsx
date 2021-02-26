import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MainContainer } from "../styles/pages/Page1.styled";

const Page1 = () => {
  const { setIsOpened } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setIsOpened(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainContainer>Conteudo da página 1</MainContainer>;
};

export default Page1;
