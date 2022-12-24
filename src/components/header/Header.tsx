import './_style.scss';

export default function Header() {
  return (
    <header className="header">
		<div className="avatar">
			<img src="https://avatars.githubusercontent.com/u/46366493"/>
		</div>
		<div>
			<h1 className="title">Front-end <br/>developer</h1>
		</div>
	</header>
  )
}