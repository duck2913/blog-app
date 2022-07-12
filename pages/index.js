import { Grid } from "@mantine/core";
import Categories from "../components/Categories/Categories";
import PostCard from "../components/PostCard/PostCard";
import PostWidget from "../components/PostWidget/PostWidget";
import { getPosts } from "../services";
import classes from "./index.module.scss";

export default function Home({ posts }) {
	return (
		<Grid className={classes["home-container"]} gutter="sm">
			<Grid.Col md={8} sm={12} className={classes["left-side"]}>
				{posts.map((post, idx) => (
					<PostCard key={idx} post={post.node} />
				))}
			</Grid.Col>
			<Grid.Col md={4} sm={12} className={classes["right-side"]}>
				<div className={classes["sticky"]}>
					<PostWidget />
					<Categories />
				</div>
			</Grid.Col>
		</Grid>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();
	return { props: { posts } };
}
