import { Card, Group, Image } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useEffect, useState } from "react";
import moment from "moment";
import { getSimilarPosts, getRecentPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
	const [posts, setPosts] = useState([]);
	console.log("🚀 -> posts", posts);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((result) => setPosts(result));
		} else {
			getRecentPosts(categories, slug).then((result) => setPosts(result));
		}
	}, [slug, categories]);

	return (
		<Card className="container" shadow={"xl"} p="lg" mb="md">
			<h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
				{slug ? "Related posts" : "Recent posts"}
			</h3>
			{posts.map((post) => (
				<div
					style={{
						display: "flex",
						marginBottom: "1rem",
						gap: "10px",
						padding: "1rem",
					}}
					key={post.slug}
				>
					<Image
						src={post?.featureImage?.url}
						width={50}
						height={50}
						radius={100}
						alt="related/recent post"
					/>
					<div style={{ padding: 0 }}>
						<NextLink href={`post/${post.slug}`}>
							<h4>{post.title}</h4>
						</NextLink>
						<p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
					</div>
				</div>
			))}
		</Card>
	);
};

export default PostWidget;
