'use client';

import styled from 'styled-components';
import { color, radius } from '../../styles/theme';

const StyledFooter = styled.footer`
  	padding: 3vw;
	margin: 2vw;
	background-color: ${color.light_grey}11;
	border-radius: ${radius.medium};
	left: 0;
	bottom: 0;
	transition: 1s;

	&:hover {
		scale: 1.02;
	}

	p {
		text-align: center;
		font-size: 1rem;
		font-weight: lighter;
	}

  	@media (prefers-color-scheme: light) {
		background-color: ${color.dark_grey}22;
	}

	@media screen and (max-width: 800px) {
		p {
			font-size: 0.8rem;
		}
	}
`;

export { StyledFooter };