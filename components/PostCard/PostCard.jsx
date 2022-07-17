import { Card, Image, Text, Button, Title, Group } from "@mantine/core";
import Link from "next/link";
import { Calendar } from "tabler-icons-react";
import moment from "moment";

const PostCard = ({ post }) => {
	return (
		<Card shadow="md" p="lg" style={{ textAlign: "center" }}>
			<Card.Section>
				<Image src={post.featureImage.url} height={360} alt="post cover" />
			</Card.Section>

			<Title order={3} style={{ marginBottom: "1rem" }}>
				{post.title}
			</Title>
			<Group position="center" style={{ marginBottom: "5px" }}>
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
			</Group>
			<Group align={"center"} position="center" style={{ marginBottom: "1rem" }}>
				<Calendar size={30} strokeWidth={2} color={"#d27979"} />
				{moment(post.createdAt).format("MMM DD,YYYY")}
			</Group>
			<Text size="md" style={{ marginBottom: "1rem" }}>
				{post.excerpt}
			</Text>

			<Button variant="light" color="blue">
				<Link href={`/post/${post.slug}`}>Continue Reading</Link>
			</Button>
		</Card>
	);
};

export default PostCard;
