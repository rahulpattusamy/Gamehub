import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default Gamecard;
