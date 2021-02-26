import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

body{
  font-family: 'Montserrat';
  color:${(props) => props.theme.text}
}

html{
  @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
