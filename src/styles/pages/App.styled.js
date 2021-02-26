import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.bioDesk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 720px) {
    background-image: url(${(props) => props.backBio});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
