import { Card, Image, Text, Button, Title, Group } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Calendar } from "tabler-icons-react";
import moment from "moment";

const PostDetail = ({ post }) => {
	return (
		<Card shadow="md" p="lg" mb={"2rem"}>
			<Card.Section>
				<Image src={post.featureImage.url} height={360} alt="post cover" />
			</Card.Section>

			<Group position="apart" style={{ margin: "1rem" }}>
				{post.authors.map((author) => (
					<Group key={author.id}>
						<Image
							src={author.photo.url}
							alt="author"
							height={30}
							width={30}
							radius={100}
						/>
						<Text size="sm">{author.name}</Text>
					</Group>
				))}
				<Group align={"center"} position="center" style={{ marginBottom: "1rem" }}>
					<Calendar size={30} strokeWidth={2} color={"#d27979"} />
					{moment(post.createdAt).format("MMM DD,YYYY")}
				</Group>
			</Group>
			<Title order={2} style={{ marginBottom: "1rem" }}>
				{post.title}
			</Title>
			<Text size="md" style={{ marginBottom: "1rem" }}>
				{post.content.raw.children[0].children[0].text}
			</Text>

			<Button variant="light" color="pink">
				Leave a Comment
			</Button>
		</Card>
	);
};

export default PostDetail;
