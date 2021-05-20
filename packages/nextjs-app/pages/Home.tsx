import * as React from "react";
import styles from "./Home.module.scss";
import { TextInput } from "@y2front/mango-ui";
import { sayHello } from "@y2front/utils";

const Home = (props) => {
	React.useEffect(() => {
		sayHello();
	}, []);
	return (
		<div className={styles.home}>
			<TextInput color="blue" placeholder="write something" />
		</div>
	);
};

export default Home;
