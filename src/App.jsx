import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { MainContainer } from "./styles/pages/App.styled";
import bioImg from "./assets/biohazard.jpg";
import bioDesk from "./assets/bio_desk.jpg";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <MainContainer backBio={bioImg} bioDesk={bioDesk}>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </MainContainer>
  );
};

export default App;
