export const graphQLClient = {
  endpoint: process.env.GRAPHQL_ENDPOINT,
  fetchParams: {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_SECRET,
    },
  },
};
