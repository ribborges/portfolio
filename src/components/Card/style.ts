'use client';

import styled from 'styled-components';
import { color, fx, radius } from '../../styles/theme';

const StyledCard = styled.div`
	background-color: ${color.dark_grey}77;
    border-radius: ${radius.medium};
    border: 1px solid ${color.light}22;
    overflow: hidden;
    flex-direction: column;
	transition: 0.5s;
    display: flex;

    .card-thumb {
        width: 100%;
        border-bottom: 1px solid ${color.light}22;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:hover {
        box-shadow: 0 0 100px ${color.light}44;
        scale: 1.05;

        .card-caption {
            background-color: ${color.accent_primary}44;
        }
    }

    .card-caption {
		backdrop-filter: ${fx.blur};
        z-index: 100;
        padding: 20px;
        display: flex;
        flex: 1;
        flex-direction: column;

        transition: all 0.5s ease;

        h4 {
            margin-bottom: 10px;
        }

        p {
            text-align: justify;
            text-justify: inter-word;
        }

        .card-opt {
            margin-top: auto;
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
        }
    }

	@media screen and (max-width: 1000px) {
        flex: 0 1 40%;
    }

	@media screen and (max-width: 600px) {
    	flex: 0 1 100%;
    }

	@media (prefers-color-scheme: light) {
        background-color: ${color.light_grey}77;
        border: 1px solid ${color.dark}22;

        .card-thumb {
            border-bottom: 1px solid ${color.dark}22;
        }

        &:hover {
            box-shadow: 0 0 100px ${color.dark}88;
        }
    }
`;

export { StyledCard };