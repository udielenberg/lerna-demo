import React from "react";
import styles from "./Layout.module.scss";
import Link from "next/link";
import { Button } from "@y2front/mango-ui";

const links = [
	{ href: "/home", value: "Home" },
	{ href: "/content", value: "Content" },
	{ href: "/about", value: "About" },
	{ href: "/ssr", value: "SSR", different: true },
];

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<header>
				<div className={styles.header}>
					<div className={styles.title}>Im the header</div>
					<div className={styles.links}>
						{links.map(({ href, value, different }) =>
							different ? (
								<Button different key={value}>
									<Link href={href}>{value}</Link>
								</Button>
							) : (
								<Button key={value}>
									<Link href={href}>{value}</Link>
								</Button>
							)
						)}
					</div>
				</div>
			</header>
			<main className={styles.content}>{children}</main>
			<footer>Im the footer</footer>
		</div>
	);
};

export default Layout;
