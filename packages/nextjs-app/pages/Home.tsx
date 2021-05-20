import * as React from "react";
import styles from "./Home.module.scss";
import TestComponent from "../components/TestComponent";
// import { TextInput } from "@y2front/mango-ui";
import { sayHello } from "@y2front/utils";

const Home = (props) => {
	React.useEffect(() => {
		sayHello();
	}, []);
	return (
		<div className={styles.home}>
			<TestComponent />
			{/* <TextInput /> */}
		</div>
	);
};

export default Home;
