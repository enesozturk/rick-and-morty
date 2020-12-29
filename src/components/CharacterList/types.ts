import { CharacterProps } from '../CharacterCard';

export type CharacterListProps = {
  info: {
    count: number;
    next: number | null;
    pages: number;
    prev: number | null;
  };
  results: CharacterProps[];
};
