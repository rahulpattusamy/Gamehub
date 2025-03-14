import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import Gamecard from "./Gamecard";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:3}} spacing={10} padding={10}>
        {games.map((game) => (
          <Gamecard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
