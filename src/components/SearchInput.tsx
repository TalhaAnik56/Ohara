import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup fontFamily={"monospace"}>
        <InputRightElement
          as={"button"}
          borderTopRightRadius={5}
          borderBottomRightRadius={5}
          bg="gray.700"
          color={"white"}
          children={<BsSearch />}
        />
        <Input
          ref={ref}
          borderRadius={5}
          variant="filled"
          placeholder="Search books by title"
          bg={"white"}
          border={"1px solid black"}
          focusBorderColor="black"
          _focus={{ border: "2px solid black" }}
          _hover={{ bg: "white" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
