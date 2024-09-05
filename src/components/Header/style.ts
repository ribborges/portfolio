'use client';

import styled from 'styled-components';
import { color, radius } from "../../styles/theme";

const StyledHeader = styled.header`
	background-image: radial-gradient(${color.light}22 1px, transparent 0);
    background-size: 25px 25px;
    animation: move-it 10s linear infinite;
    min-height: 65vh;
    padding: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;

	h1 {
        color: $primary-accent-color;
    }

    * {
        z-index: 2;
    }

	@keyframes move-it {
		0% {
			background-position: initial;
		}

		100% {
			background-position: 100px 100px;
		}
	}

	@media screen and (max-width: 700px) {
		padding: 5vw;
        padding-top: 40%;
        min-height: 70vh;
        flex-direction: column;
	}

	@media (prefers-color-scheme: light) {
		background-image: radial-gradient(${color.dark}33 1px, transparent 0);
	}
`;

const HeaderInfo = styled.div`
	flex: 1;
    margin: 5vw;
`;

const SocialButtons = styled.div`
	display: flex;
    flex-direction: row;
`;

const HeaderPicture = styled.div`
	display: flex;
    overflow: hidden;
    max-width: 20vw;
    max-height: 20vw;
    border-radius: 50%;
    transition: 1s;

    &:hover {
        border-radius: ${radius.medium};
    }

	@media screen and (max-width: 700px) {
		max-width: 70vw;
        max-height: 70vw;
	}
`;

const Name = styled.h1`
	color: ${color.accent_primary};
`;

export { StyledHeader, HeaderInfo, SocialButtons, HeaderPicture, Name };