import { Grid } from "@mantine/core";
import { getPostDetails, getPosts } from "../../services";
import Author from "../../components/Author";
import Categories from "../../components/Categories/Categories";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";
import PostDetail from "../../components/PostDetail";
import PostWidget from "../../components/PostWidget/PostWidget";
import classes from "../index.module.scss";

const PostDetails = ({ post }) => {
	console.log("🚀 -> post", post);
	return (
		<Grid className={classes["home-container"]} gutter="sm">
			<Grid.Col md={8} sm={12} className={classes["left-side"]}>
				<PostDetail post={post} />
				<Author author={post.authors[0]} />
				<CommentForm slug={post.slug} />
				<Comments slug={post.slug} ser />
			</Grid.Col>
			<Grid.Col md={4} sm={12} className={classes["right-side"]}>
				<div className={classes["sticky"]}>
					<PostWidget
						slug={post.slug}
						categories={post.categories.map((category) => category.slug)}
					/>
					<Categories />
				</div>
			</Grid.Col>
		</Grid>
	);
};

export default PostDetails;

export async function getStaticProps({ params }) {
	const post = await getPostDetails(params.slug);
	return { props: { post } };
}

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: false,
	};
}
