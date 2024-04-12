import { ReactNode } from 'react';
import styled from 'styled-components';

import { color, fx, radius } from '../../style/theme';

interface navProps {
	onChange: any,
	title?: string,
	children?: ReactNode
}

interface navItemProps {
	icon?: any,
	label?: string,
	href?: string
}

export function NavBar(props: navProps) {
	return (
		<StyledNavbar>
			<div className="title">
				<span className="title-text">{props.title}</span>
			</div>
			<div className="items">
				{props.children}
			</div>
		</StyledNavbar>
	);
}

export function NavItem(props: navItemProps) {
	return (
		<StyledNavItem href={props.href}>
			{props.icon}
			<i className="nav-item-label">{props.label}</i>
		</StyledNavItem>
	);
}

const StyledNavbar = styled.nav`
	@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	color: ${color.light};
	background-color: ${color.dark_grey}44;
	height: 8vw;
	max-height: 8vh;
	width: auto;
	position: fixed;
	margin: 5px;
	z-index: 999;
	transition: 1s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: ${radius.medium};
	border-bottom: 1px solid ${color.light_grey}22;
	backdrop-filter: ${fx.blur};

	.title {
		color: ${color.light};
		background-color: ${color.accent_primary};
		display: flex;
		align-items: center;
		align-content: center;
		width: 3vw;
		height: 3vw;
		margin: 0.5vw;
		border-radius: ${radius.medium};

		.title-text {
			flex: 1;
			font-family: "Playfair Display", serif;
			text-align: center;
			font-size: 100%;
		}
	}

	.items {
		display: flex;
	}

	@media screen and (max-width: 800px) {
		.title {
			border-radius: ${radius.small};
			margin: 1.5vw;
			width: 6.5vw;
			height: 6.5vw;
		}
	}

	@media (prefers-color-scheme: light) {
		color: ${color.dark};
		background-color: ${color.light_grey}44;
		border-bottom: 1px solid ${color.dark_grey}44;
	}
`;

const StyledNavItem = styled.a`
	color: ${color.light};
	display: flex;
	align-items: center;
	align-content: center;
	gap: 5px;
	padding: 1vw;
	text-decoration: none;
	margin: .5vw;
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