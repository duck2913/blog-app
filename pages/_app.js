import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

export default function App(props) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Your wonderful dashboard</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
					fontFamily: "Be Vietnam Pro",
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MantineProvider>
		</>
	);
}
