import { useEffect, useState } from "react";
import { Card, Group, Button } from "@mantine/core";
import { getCategories } from "../../services";
import { NextLink } from "@mantine/next";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((result) => setCategories(result));
	}, []);

	return (
		<Card className="container" shadow={"xl"} p="lg" mb="md">
			<h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
				Categories
			</h3>

			<Group style={{ padding: "1rem 0" }}>
				{categories.map((category) => (
					<Button variant="light" key={category.name} radius="lg">
						<NextLink href={`category/${category.slug}`}>{category.name}</NextLink>
					</Button>
				))}
			</Group>
		</Card>
	);
};

export default Categories;
