import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Publishers = () => {
  return (
    <Menu >
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
