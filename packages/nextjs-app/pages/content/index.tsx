import * as React from "react";
import styles from "./index.module.scss";

const Content = (props) => {
	return (
		<div className={styles.content}>
			<h1>Content Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Suscipit velit animi optio vero voluptatum aliquam vitae,
				tempore neque culpa incidunt dolorem modi, dolore voluptates!
				Cupiditate sit saepe temporibus in molestiae?
			</p>
		</div>
	);
};

export default Content;
