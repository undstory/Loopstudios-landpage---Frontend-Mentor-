import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.5rem;
        max-width: 1920px;
        margin: 0 auto;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle