import { displayText } from '../../data/lang';
import { Input } from '../input/Input';
import './_style.scss';

interface navProps {
	onChange: any,
	lang?: displayText,
}

export default function Nav(props: navProps) {
	return (
		<nav id="navbar" className="navbar">
			<a className="nav-item" href="index.html"><i className="bi bi-house-door-fill" /><i className="nav-item-label">{props.lang?.nav.home}</i></a>

			<a style={{ marginLeft: "auto" }} className="nav-item" href="#about"><i className="bi bi-person-fill" /><i className="nav-item-label">{props.lang?.nav.about}</i></a>

			<a className="nav-item" href="#portfolio"><i className="bi bi-briefcase-fill" /><i className="nav-item-label">{props.lang?.nav.portfolio}</i></a>

			<p><Input icon="bi bi-translate" type="option" onChange={props.onChange}>
				<option value="en">English</option>
				<option value="pt">Português</option>
			</Input></p>
		</nav>
	)
}