import { GraphQLClient, gql } from 'graphql-request';
import { CharacterDetailProps } from '../routes/CharacterDetails/types';
import { CharacterListProps } from '../components/CharacterList/types';

const endpoint = 'https://rickandmortyapi.com/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export const getCharacterList = async (
  page: number,
): Promise<{ characters: CharacterListProps }> => {
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

  const data = await graphQLClient.request<{ characters: CharacterListProps }>(query);
  return data;
};

export const getCharacterDetails = async (
  characterId: number,
): Promise<{ character: CharacterDetailProps }> => {
  const query: string = gql`
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

  const data = await graphQLClient.request<{ character: CharacterDetailProps }>(query);
  return data;
};
