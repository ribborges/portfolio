import { ReactNode } from 'react';
import { Input } from '../input/Input';

import './_style.scss';

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
		<nav id="navbar" className="navbar">
			<div className="title">
				<span className="title-text">{props.title}</span>
			</div>
			<div className="items">
				{props.children}
			</div>
		</nav>
	)
}

export function NavItem(props: navItemProps) {
    return (
        <a className="nav-item" href={props.href}>
            {props.icon}
            <i className="nav-item-label">{props.label}</i>
        </a>
    )
}