import { Box, Card } from "@mantine/core";
import moment from "moment";
import { useState, useEffect } from "react";
import { getComments } from "../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);
	console.log("🚀 -> comments", comments);

	useEffect(() => {
		getComments(slug).then((result) => setComments(result));
	}, [slug]);

	return (
		<Card shadow={"xl"}>
			<h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
				{comments.length} comments
			</h3>
			{comments.length && (
				<div style={{ marginTop: "1rem" }}>
					{comments.map((comment) => (
						<Box key={comment.createdAt} my={"1rem"}>
							<span style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
								{comment.name}
							</span>{" "}
							at {moment(comment.createdAt).format("DD MMM, YYYY")}
							<p style={{ fontSize: "0.9rem", color: "#999" }}>{comment.comment}</p>
						</Box>
					))}
				</div>
			)}
		</Card>
	);
};

export default Comments;
