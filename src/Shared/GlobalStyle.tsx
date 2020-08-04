import { createGlobalStyle } from "styled-components";
import { colours } from "./SharedStyles";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        scroll-behavior: smooth;
        font-weight: 900;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.grey20};
        border-radius: 20px;
    }
`;

export default GlobalStyle;