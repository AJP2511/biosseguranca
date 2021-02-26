import React from "react";
import { MainContainer } from "../styles/components/Content.styled";
import { Switch, Route } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Inicial from "../pages/Inicial";

const Content = () => {
  return (
    <MainContainer>
      <Switch>
        <Route path="/" exact children={<Inicial />} />
        <Route path="/page1" children={<Page1 />} />
        <Route path="/page2" children={<Page2 />} />
        <Route path="/page3" children={<Page3 />} />
      </Switch>
    </MainContainer>
  );
};

export default Content;
