import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  OnSearch: (searchText: string) => void;
}


const NavBar = ({OnSearch}:Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px" />
      <SearchInput OnSearch={OnSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
