import { Grid } from "@mantine/core";
import { getPosts } from "../services";
import classes from "./index.module.scss";

export default function Home({ posts }) {
	console.log("🚀 -> data", posts);
	return (
		<Grid className={classes["home-container"]} gutter={"sm"}>
			<Grid.Col md={8} sm={12}>
				1
			</Grid.Col>
			<Grid.Col md={4} sm={12}>
				2
			</Grid.Col>
		</Grid>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();
	return { props: posts };
}
