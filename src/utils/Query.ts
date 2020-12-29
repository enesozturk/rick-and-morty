import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://rickandmortyapi.com/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export const getCharacterList = async () => {
  const query = gql`
    {
      characters {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data;
};
