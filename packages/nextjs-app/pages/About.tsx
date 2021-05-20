import * as React from "react";
import styles from "./About.module.scss";
import TestComponent from "../components/TestComponent";

const About = (props) => {
	return (
		<div className={styles.about}>
			<TestComponent />
		</div>
	);
};

export default About;
