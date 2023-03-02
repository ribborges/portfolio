import './_style.scss';

export default function Nav() {
  return (
    <nav id="navbar" className="navbar">
		<a className="nav-item" href="index.html"><i className="bi bi-house-door-fill"></i><i className="nav-item-label"> Home</i></a>

		<a style={{marginLeft: "auto"}} className="nav-item" href="#about"><i className="bi bi-person"></i><i className="nav-item-label"> About me</i></a>

		<a className="nav-item" href="#portfolio"><i className="bi bi-briefcase"></i><i className="nav-item-label"> Portfolio</i></a>

		<a className="nav-item" href="#contact"><i className="bi bi-card-list"></i><i className="nav-item-label"> Contact</i></a>
	</nav>
  )
}