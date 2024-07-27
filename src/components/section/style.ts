'use client';

import styled from 'styled-components';
import { radius } from "../../styles/theme";

const AboutContainer = styled.section`
	p {
        display: inline-block;
        text-align: justify;
        text-justify: inter-word;
        margin-top: 10px;
        margin-bottom: 10px;
    }

	.summary {
    	padding-left: 10vw;
    	padding-right: 10vw;

    	.paragraph {
			font-size: 1.4rem;
        	text-indent: 50px;
    	}
	}

	@media screen and (max-width: 700px) {
		.summary {
			padding-left: 5vw;
			padding-right: 5vw;
		
			.paragraph {
				text-indent: 25px;
			}
		}
	}
`;

const Info = styled.div`
	display: flex;

	@media screen and (max-width: 700px) {
		flex-direction: column;
		gap: 50px;
	}
`;

const InfoSection = styled.div`
	flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledTag = styled.span`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    .icon {
        border-radius: ${radius.small};
        min-width: 25px;
        min-height: 25px;
        max-width: 35px;
        max-height: 35px;
    }
`;

export { AboutContainer, Info, InfoSection, StyledTag };