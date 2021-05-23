import * as React from "react";
import styles from "./index.module.scss";
import { TextInput } from "@y2front/mango-ui";
import { sayHello } from "@y2front/utils";

const Home = (props) => {
	React.useEffect(() => {
		sayHello();
	}, []);
	return (
		<div className={styles.home}>
			<h1>Home Page</h1>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Suscipit velit animi optio vero voluptatum aliquam vitae,
					tempore neque culpa incidunt dolorem modi, dolore
					voluptates! Cupiditate sit saepe temporibus in molestiae?
				</p>
				<TextInput color="#ff00bc" placeholder="write something" />
			</div>
		</div>
	);
};

export default Home;
