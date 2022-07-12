import { Container } from "@mantine/core";

import Header from "../Header/Header";

const Layout = ({ children }) => {
	return (
		<Container size="xl">
			<Header />
			{children}
		</Container>
	);
};

export default Layout;
