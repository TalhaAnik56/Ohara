import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Publishers = () => {
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
        rightIcon={<BsCaretDownSquare />}
      >
        Publishers
      </MenuButton>
      <MenuList>
        <MenuItem key={1}>Prothoma</MenuItem>
        <MenuItem key={2}>Onno Prokash</MenuItem>
        <MenuItem key={3}>Prothom Alo</MenuItem>
        <MenuItem key={4}>Deyal</MenuItem>
        <MenuItem key={5}>Sheba Prokashoni</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Publishers;
