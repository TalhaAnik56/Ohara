import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsCaretDownSquare } from "react-icons/bs";

const Writers = () => {
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
