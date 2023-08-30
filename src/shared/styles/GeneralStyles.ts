import { createGlobalStyle } from "styled-components";
import { color } from './variables';

export default createGlobalStyle`
    html,
    body,
    #root {
        height: 100%;
        min-height: 100%;
        margin: 0;
        overflow-x: hidden;
    }

    body {
        height: 100%;
        font-size: 100%;
    }

    .main {
        background-color: ${color.defaultBg};
    }

    h1,
    h2,
    p {
        margin: 0;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;


