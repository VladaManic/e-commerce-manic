import { createGlobalStyle } from "styled-components"

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


