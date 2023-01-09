import Button from "../button/Button";
import Card from "../card/Card";

import './_portfolio.scss';

export default function About() {
  return (
    <section id="portfolio">
		<h1><i className="bi bi-briefcase"></i> PORTFOLIO</h1>

		<div className="flex-container">
			<Card
			thumb={"/static/img/projects/rocketnews.png"}
			title={"Rocketnews"}
			text={"Rocketseat newsletter challenge"}>
				<Button href="https://ribborges.github.io/rocketnews/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/rocketnews/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/socialTree.png"}
			title={"Social tree"}
			text={"Rocketseat social tree challenge"}>
				<Button href="https://socialtree-richardborges.vercel.app/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/social-tree/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/rkPortfofio.png"}
			title={"Portfolio"}
			text={"Rocketseat portfolio challenge"}>
				<Button href="https://ribborges.github.io/rocketseat-challenges/portfolio/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/rocketseat-challenges/tree/main/portfolio/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/rocketseatListaPresenca.png"}
			title={"Attendance list"}
			text={"Rocketseat - Attendance list"}>
				<Button href="https://lista-presenca-two.vercel.app/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/lista-presenca/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/aluraStudies.png"}
			title={"Alura Studies"}
			text={"Studie list with stopwatch"}>
				<Button href="https://alura-studies-gray.vercel.app/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/alura-studies/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/aluraSpa.png"}
			title={"Alura Spa"}
			text={"Alura Spa - Made with SCSS"}>
				<Button href="https://ribborges.github.io/alura-spa/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/alura-spa/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/mTable.png"}
			title={"Multiplication table"}
			text={"Multiplication table for web developed for the class 'Special topics in computing I'."}>
				<Button href="https://ribborges.github.io/Multiply-Table/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Multiply-Table/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/students.png"}
			title={"Students"}
			text={"Student registration for web developed for the class 'Special topics in computing I'."}>
				<Button href="https://ribborges.github.io/University/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/University/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/arcade.png"}
			title={"Arcade"}
			text={"Tic tac toe and memory game developed for the class 'Algorithms and data structures I'."}>
				<Button href="https://ribborges.github.io/Arcade/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Arcade/"><i className="bi bi-github"></i> Code</Button>
			</Card>

			<Card
			thumb={"/static/img/projects/kids.png"}
			title={"Audio game for kids"}
			text={"A game to teach English for children. Developed for the class 'Algorithms and data structures I'."}>
				<Button href="https://ribborges.github.io/Kids/"><i className="bi bi-box-arrow-up-right"></i> Demo</Button>
				<Button href="https://github.com/ribborges/Kids"><i className="bi bi-github"></i> Code</Button>
			</Card>
		</div>
	</section>
  )
}