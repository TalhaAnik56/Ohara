import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Writers = () => {
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
        Writers
      </MenuButton>
      <MenuList>
        <MenuItem key={1}>Humayun Ahmed</MenuItem>
        <MenuItem key={2}>Zafar Iqbal</MenuItem>
        <MenuItem key={3}>Anisul Islam</MenuItem>
        <MenuItem key={4}>Rafael Sabatini</MenuItem>
        <MenuItem key={5}>Henry Haider Hagard</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Writers;
