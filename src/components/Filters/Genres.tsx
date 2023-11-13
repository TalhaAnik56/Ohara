import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Genres = () => {
  return (
    <Menu>
      <MenuButton
        _active={{
          bg: "white",
          borderBottom: "3px solid gray",
          borderRadius: "0px",
        }}
        _hover={{
          bg: "white",
          borderBottom: "3px solid gray",
          borderRadius: "0px",
        }}
        color={"gray.700"}
        bg={"white"}
        as={Button}
        rightIcon={<BsCaretDownSquare /> }
      >
        Genres
      </MenuButton>
      <MenuList>
        <MenuItem key={1}>Drama</MenuItem>
        <MenuItem key={2}>Horror</MenuItem>
        <MenuItem key={3}>Adventure</MenuItem>
        <MenuItem key={4}>Science Fiction</MenuItem>
        <MenuItem key={5}>Others</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Genres;
