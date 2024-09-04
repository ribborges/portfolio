'use client';

import styled from 'styled-components';
import { color, fx, radius } from '../../styles/theme';

const StyledNavbar = styled.nav`
	@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	color: ${color.light};
	background-color: ${color.dark_grey}44;
	font-size: 1rem;
	height: 8vw;
	max-height: 8vh;
	width: auto;
	position: fixed;
	margin: 5px;
	padding: 10px;
	z-index: 999;
	transition: 1s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: ${radius.medium};
	border: 1px solid ${color.light_grey}11;
	border-bottom: 2px solid ${color.light_grey}22;
	backdrop-filter: ${fx.blur};

	.items {
		display: flex;
		gap: 1rem;
	}

	@media screen and (max-width: 800px) {
		height: 12vw;
		font-size: 1.2rem;
	}

	@media (prefers-color-scheme: light) {
		color: ${color.dark};
		background-color: ${color.light_grey}44;
		border: 1px solid ${color.dark_grey}11;
		border-bottom: 1px solid ${color.dark_grey}44;
	}
`;

const StyledNavItem = styled.a`
	color: ${color.light};
	display: flex;
	align-items: center;
	align-content: center;
	gap: 5px;
	padding: 20px;
	text-decoration: none;
	border: 2px solid transparent;
	border-radius: ${radius.medium};
	transition: 1s;
	cursor: pointer;

	i {
		font-style: normal;
	}

	&:hover,
	&:focus {
		color: ${color.light};
		text-decoration: none;
		background-color: ${color.light_grey}44;
		border: 2px solid ${color.light}22;
	}

	@media screen and (max-width: 800px) {
		.nav-item-label {
			display: none;
		}
	}

	@media (prefers-color-scheme: light) {
		color: ${color.dark};

		&:hover,
		&:focus {
			color: ${color.dark};
			background-color: ${color.dark_grey}22;
			border: 2px solid ${color.dark}11;
		}
	}
`;

const StyledLogo = styled.div`
	color: ${color.light};
	display: flex;
	align-items: center;
	align-content: center;
	font-size: 1.6rem;
	width: 3.5vw;
	height: 3.5vw;
	border-radius: ${radius.medium};
	transition: 0.3s;

	&:hover, &:focus {
		color: ${color.accent_primary};
	}

	@media screen and (max-width: 800px) {
		border-radius: ${radius.small};
		margin: 1.5vw;
		width: 12vw;
		height: 12vw;
	}

	@media (prefers-color-scheme: light) {
		color: ${color.dark};
	}
`;

export { StyledNavbar, StyledNavItem, StyledLogo };