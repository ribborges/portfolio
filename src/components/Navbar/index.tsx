"use client"

import { ReactNode, useState } from 'react';
import { X, List } from 'react-bootstrap-icons';
import clsx from 'clsx';

import { MenuButton } from '@/components/Input';

import Logo from './Logo';

interface ItemContainerProps {
	className?: string;
	children?: ReactNode;
}

export function NavBar(props: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<>
			<nav className="
				top-0 left-0 right-0 bottom-0
				flex items-center content-center justify-between self-start
				fixed
				backdrop-blur-md bg-zinc-100/50 dark:bg-zinc-950/50
				z-50 p-4 m-2
				border border-b-2 border-solid rounded-4xl
                border-zinc-400/40 dark:border-zinc-800/40
				shadow-xl
				select-none
			">
				<div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
					<div className="
						text-zinc-950 dark:text-zinc-200 hover:text-slate-600
						transition duration-500
					">
						<Logo />
					</div>
				</div>
				<NavItemContainer className="justify-end hidden lg:flex">
					{props.children}
				</NavItemContainer>
				<NavItemContainer className="justify-end lg:hidden">
					<MenuButton onClick={toggleMenu} icon={
						isMenuOpen ? <X /> : <List />
					} />
				</NavItemContainer>
			</nav>
			{isMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-40 bg-white/90 dark:bg-black/90 dark:bg-opacity-90 backdrop-blur-sm pt-32 p-4">
					<div className="flex flex-col items-stretch h-full gap-2">
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}

export function NavItemContainer(props: ItemContainerProps) {
	return (
		<div className={clsx("flex-1 flex items-center content-center gap-1", props.className)}>
			{props.children}
		</div>
	);
}