'use client';

import { createGlobalStyle } from 'styled-components';

import { color, font } from './theme';
import hexToRgb from '../lib/hexToRgb';

const GlobalStyle = createGlobalStyle`
    // Reset CSS
    * {
        color: unset;
        background-color: unset;
        margin: 0;
        padding: 0;
        box-sizing: unset;
        font-family: unset;
        border: 0 none;
        vertical-align: baseline;
        font-size: unset;
    }
    
    html, body {
        min-height: 100vh;
    }
    
    body, div, header, main, footer, nav {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    img, video {
        height: auto;
        max-width: 100%;
    }
    
    ol, ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        font-style: normal;
    }
  
    h1, h2, h3, h4, h5, h6, p, span, a {
        font-size: 100%;
        font-weight: normal;
    }

    // Global styles
    body {
        // Color scheme
        color: ${color.light};
        background: ${color.dark};
        background-image: linear-gradient(135deg, rgba(${hexToRgb(color.accent_primary)}, 0.12) 0%, rgba(${hexToRgb(color.dark)}, 0) 100%),
            linear-gradient(0deg, rgba(${hexToRgb(color.accent_tertiary)}, 0.08) 0%, rgba(${hexToRgb(color.dark)}, 0) 100%),
            linear-gradient(180deg, rgba(${hexToRgb(color.accent_secondary)}, 0.1) 0%, rgba(${hexToRgb(color.dark)}, 0) 100%);

        // Font
        font-size: ${font.size.base};

        // Scrollbar
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
    }

    h2 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.5em;
        font-weight: bold;
    }

    h4 {
        font-size: 1.3em;
        font-weight: bold;
    }

    a {
        color: ${color.accent_primary};
        transition: 1s;

        &:hover {
            color: ${color.accent_secondary};
            text-shadow: 0 0 20px #ffffff82;
            text-decoration: underline;
        }
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;

        .flex-1 {
            flex: 1;
        }

        .flex-2 {
            flex: 2;
        }

        .flex-3 {
            flex: 3;
        }

        .flex-4 {
            flex: 4;
        }

        .flex-5 {
            flex: 5;
        }
    }

    .flex-col {
        flex-direction: column;
    }

    .flex-center {
        align-items: center;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 2em;
            font-weight: bold;
        }

        h2 {
            font-size: 1.5em;
            font-weight: bold;
        }

        h3 {
            font-size: 1.2em;
            font-weight: bold;
        }

        h4 {
            font-size: 1em;
            font-weight: bold;
        }
    }

    @media (prefers-color-scheme: light) {
        body {
            // Color scheme
            color: ${color.dark};
            background: ${color.light};
            background-image: linear-gradient(135deg, rgba(${hexToRgb(color.accent_primary)}, 0.3) 0%, rgba(${hexToRgb(color.light)}, 0) 100%),
                linear-gradient(0deg, rgba(${hexToRgb(color.accent_tertiary)}, 0.3) 0%, rgba(${hexToRgb(color.light)}, 0) 100%),
                linear-gradient(180deg, rgba(${hexToRgb(color.accent_secondary)}, 0.3) 0%, rgba(${hexToRgb(color.light)}, 0) 100%);
        }
    }

    .content {
        padding: 5vw;

        section {
            padding: 4vw;
            padding-top: 15vw;
            padding-bottom: 15vw;
        }
    }
`;

export default GlobalStyle;