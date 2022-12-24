import Button from "../button/Button";
import Card from "../card/Card";

import './_portfolio.scss';

export default function About() {
  return (
    <section id="portfolio">
		<h1><i className="bi bi-briefcase"></i> PORTFOLIO</h1>

		<div className="flex-container">
			<Card
			thumb={"./src/img/mTable.png"}
			title={"Multiplication table"}
			text={"Multiplication table for web developed for the class 'Special topics in computing I'."}>
				<Button href="https://ribborges.github.io/Multiply-Table/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Multiply-Table/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"./src/img/rkPortfofio.png"}
			title={"Portfolio"}
			text={"Rocketseat portfolio challange"}>
				<Button href="https://ribborges.github.io/rocketseat-challenges/portfolio/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/rocketseat-challenges/tree/main/portfolio"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"./src/img/mTable.png"}
			title={"Multiplication table"}
			text={"Multiplication table for web developed for the class 'Special topics in computing I'."}>
				<Button href="https://ribborges.github.io/Multiply-Table/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Multiply-Table/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"./src/img/students.png"}
			title={"Students"}
			text={"Student registration for web developed for the class 'Special topics in computing I'."}>
				<Button href="https://ribborges.github.io/University/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/University/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"./src/img/arcade.png"}
			title={"Arcade"}
			text={"Tic tac toe and memory game developed for the class 'Algorithms and data structures I'."}>
				<Button href="https://ribborges.github.io/Arcade/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Arcade/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"./src/img/kids.png"}
			title={"Audio game for kids"}
			text={"A game to teach English for children. Developed for the class 'Algorithms and data structures I'."}>
				<Button href="https://ribborges.github.io/Kids/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Kids"><i className="bi bi-github"></i> Code</Button>
			</Card>
		</div>
	</section>
  )
}