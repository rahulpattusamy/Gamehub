import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={
         getCroppedImageUrl( game.background_image)} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIcons platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        
        </CardBody>
      </Card>
    </div>
  );
};

export default Gamecard;
