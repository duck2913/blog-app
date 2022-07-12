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

export const getRecentPosts = async () => {
	const query = gql`
        query GetPostDetails(){
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
export const getSimilarPosts = async () => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
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
	const result = await request(graphqlAPI, query);
	return result.posts;
};
