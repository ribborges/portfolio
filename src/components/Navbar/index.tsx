import { ReactNode } from 'react';

import { StyledNavbar, StyledNavItem } from './style';

interface navProps {
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