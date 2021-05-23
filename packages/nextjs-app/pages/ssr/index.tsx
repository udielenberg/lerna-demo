import * as React from "react";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import axios from "axios";
import { Block } from "@y2front/mango-ui";

const Ssr = ({ ssrValue }) => {
	const [csrValue, setCsrValue] = useState("");
	useEffect(() => {
		axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
			setCsrValue(res.data.value);
		});
	}, []);
	return (
		<div className={styles.ssr}>
			<h1>SSR</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Suscipit velit animi optio vero voluptatum aliquam vitae,
				tempore neque culpa incidunt dolorem modi, dolore voluptates!
				Cupiditate sit saepe temporibus in molestiae?
			</p>
			<Block label="ssr" value={ssrValue} />
			<Block label="csr" value={csrValue} />
		</div>
	);
};

export const getStaticProps = async () => {
	let ssrValue;
	try {
		const res = await axios.get("https://api.chucknorris.io/jokes/random");
		ssrValue = res.data.value;
	} catch (error) {
		ssrValue = "errrorrr";
	} finally {
		return {
			props: {
				ssrValue,
			},
		};
	}
};

export default Ssr;
