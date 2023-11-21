import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Genres = () => {
  return (
    <Menu>
      <MenuButton
        _active={{
          bg: "#3f5147",
          borderBottom: "4px solid #2d3748",
          borderRadius: "0px",
        }}
        _hover={{
          bg: "#3f5147",
          borderBottom: "4px solid #2d3748",
          borderRadius: "0px",
        }}
        color={"white"}
        bg={"#3f5147"}
        as={Button}
        rightIcon={<BsCaretDownSquare />}
      >
        Genres
      </MenuButton>
      {/* to overlap over arrow signs I put zIndex={2}, Look at the UI */}
      <MenuList position={"relative"} zIndex={2}>
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
