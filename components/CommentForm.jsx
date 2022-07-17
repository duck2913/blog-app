import { Alert, Button, Card, Grid, Notification, Textarea, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import { AlertCircle, Check } from "tabler-icons-react";
import { submitComment } from "../services";

const CommentForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const commentEl = useRef(null);
	const nameEl = useRef(null);
	const emailEl = useRef(null);

	function handleSubmitComment() {
		const { value: comment } = commentEl.current;
		const { value: name } = nameEl.current;
		const { value: email } = emailEl.current;

		if (!name || !email || !comment) {
			setError(true);
			return;
		}
		setError(false);
		const commentObj = {
			comment,
			name,
			email,
			slug,
		};
		submitComment(commentObj)
			.then((_) => {
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
				}, 10000);
			})
			.catch((error) => console.error(error));
	}

	return (
		<Card shadow={"lg"}>
			<h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
				Comment Form
			</h3>

			<Grid>
				<Grid.Col sm={12}>
					<Textarea
						placeholder="Your comment"
						label="Your comment"
						required
						ref={commentEl}
						variant="filled"
					/>
				</Grid.Col>
				<Grid.Col sm={12} lg={6}>
					<TextInput
						placeholder="Your name"
						label="Full name"
						variant="filled"
						required
						ref={nameEl}
					/>
				</Grid.Col>
				<Grid.Col sm={12} lg={6}>
					<TextInput
						placeholder="Your Email"
						label="Email"
						variant="filled"
						required
						ref={emailEl}
					/>
				</Grid.Col>
			</Grid>
			<Button mt={"1rem"} color="pink" radius={"md"} onClick={handleSubmitComment}>
				Submit
			</Button>
			{error && (
				<Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red" mt={"1rem"}>
					Please fill in your comment, name and email!
				</Alert>
			)}
			{success && (
				<Alert icon={<Check size={16} />} title="Bummer!" color="teal" mt={"1rem"}>
					Submit comment successfully
				</Alert>
			)}
		</Card>
	);
};

export default CommentForm;
