import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MainContainer } from "../styles/pages/Page2.styled";

const Page2 = () => {
  const { setIsOpened } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setIsOpened(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <MainContainer>Conteudo da página 2</MainContainer>;
};

export default Page2;
