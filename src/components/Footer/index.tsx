import { StyledFooter } from "./style";

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>Developed by: <a href='https://www.linkedin.com/in/ribborges/' target={'_blank'}>Richard de Carvalho Borges</a> with <a href='https://nextjs.org/' target={'_blank'}>Next.js</a>, <a href="https://www.typescriptlang.org/" target={'_blank'}>TypeScript</a>, <a href='https://styled-components.com/' target={'_blank'}>Styled Components</a> and <a href='https://sass-lang.com/' target={'_blank'}>SCSS</a> | {currentYear}</p>
    </StyledFooter>
  );
}