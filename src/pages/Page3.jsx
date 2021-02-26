import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MainContainer } from "../styles/pages/Page3.styled";

const Page3 = () => {
  const { setIsOpened } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setIsOpened(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainContainer>Conteudo da página 3</MainContainer>;
};

export default Page3;
