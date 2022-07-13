import { Card, Title, Text, Image } from "@mantine/core";

const Author = ({ author }) => {
	console.log("🚀 -> author", author);
	return (
		<Card
			shadow="sm"
			p="lg"
			style={{
				backgroundColor: "#2C2E33",
				opacity: 0.9,
				color: "white",
				position: "relative",
				textAlign: "center",
				overflow: "visible",
			}}
		>
			<Title order={4} mt={20}>
				{author.name}
			</Title>
			<Text size="sm" color={"lightgray"}>
				{author.bio}
			</Text>
			<Image
				src={author.photo.url}
				alt="author"
				height={70}
				width={70}
				radius={100}
				style={{
					position: "absolute",
					top: "0%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			/>
		</Card>
	);
};

export default Author;
