import styled from 'styled-components';

import { color, radius } from '../../styles/theme';

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>Developed by: <a href='https://www.linkedin.com/in/ribborges/' target={'_blank'}>Richard de Carvalho Borges</a> with <a href='https://nextjs.org/' target={'_blank'}>Next.js</a>, <a href="https://www.typescriptlang.org/" target={'_blank'}>TypeScript</a>, <a href='https://styled-components.com/' target={'_blank'}>Styled Components</a> and <a href='https://sass-lang.com/' target={'_blank'}>SCSS</a> | {currentYear}</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 2vw;
	margin: 2vw;
	background-color: ${color.light_grey}22;
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
`;