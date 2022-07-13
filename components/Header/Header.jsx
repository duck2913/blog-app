import { useEffect, useState } from "react";
import { Button, Group, Image } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { getCategories } from "../../services";

import classes from "./Header.module.scss";

const colors = [
	"green",
	"lime",
	"orange",
	"yellow",
	"teal",
	"red",
	"violet",
	"pink",
	"grape",
	"indigo",
];

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((result) => setCategories(result));
	}, []);

	return (
		<div className={classes["header"]}>
			<Group position="apart">
				<NextLink className="logo" href="/">
					<Image
						alt="logo"
						src="https://cdn.dribbble.com/userupload/3106835/file/original-ce4397c603ec84f2a1497ae21674f441.png?compress=1&resize=1504x1128"
						width={150}
						height={60}
					/>
				</NextLink>
				<div className="links">
					<Group>
						{categories.map((category) => (
							<Button
								variant="light"
								key={category.name}
								radius="lg"
								color={colors[Math.round(Math.random() * (colors.length - 1))]}
							>
								<NextLink href={`category/${category.slug}`}>
									{category.name}
								</NextLink>
							</Button>
						))}
					</Group>
				</div>
			</Group>
		</div>
	);
};

export default Header;
