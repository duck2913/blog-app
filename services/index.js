import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query getPosts {
			postsConnection {
				edges {
					node {
						categories {
							name
							id
						}
						authors {
							bio
							id
							name
							photo {
								url
							}
						}
						createdAt
						excerpt
						slug
						title
						featureImage {
							url
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.postsConnection.edges;
};

export const getCategories = async () => {
	const query = gql`
		query GetGategories {
			categories {
				name
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.categories;
};
