import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import Gamecard from "./Gamecard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1,2,3,4,5,6];

  return (
    <div>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:3}} spacing={10} padding={10}>
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => (
          <Gamecard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
