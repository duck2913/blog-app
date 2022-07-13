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
							slug
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
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.categories;
};

export const getRecentPosts = async () => {
	const query = gql`
        query GetRecentPosts(){
            posts(
                orderBy: createdAt_ASC
                last: 3
            ){
                title
                featureImage{
                    url
                }
                createdAt
                slug
            }
        }
    `;
	const result = await request(graphqlAPI, query);
	return result.posts;
};

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				categories {
					name
					slug
				}
				content {
					raw
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
	`;
	const result = await request(graphqlAPI, query, { slug });
	return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
	const query = gql`
		query GetSimilarPosts($slug: String!, $categories: [String!]) {
			posts(
				where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
				last: 3
			) {
				title
				featureImage {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query, { slug, categories });
	return result.posts;
};
