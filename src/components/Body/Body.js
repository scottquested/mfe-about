import { Header as Head, Button } from "components/Components";

import "./Body.scss";

const Body = () => {
	return (
		<div className="mfe-about-body">
			This is the About MFE
			<Head someText="A header component in About" />
			<Button text="A button component in about" />
		</div>
	);
};

export default Body;
