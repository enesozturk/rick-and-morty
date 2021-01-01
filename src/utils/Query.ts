import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://rickandmortyapi.com/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export const getCharacterList = async (page: number) => {
  const query = gql`
    {
      characters (page: ${page}) {
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

export const getCharacterDetails = async (characterId: number) => {
  const query = gql`
    {
      character(id: ${characterId}) {
        name
        status
        species
        type
        gender
        image
        episode {
            id
            name
            episode
        }
        created
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data;
};
