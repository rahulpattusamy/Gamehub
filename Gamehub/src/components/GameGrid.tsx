import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import Gamecard from "./Gamecard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <Gamecard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
