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
          border={"3px solid #2d3748"}
          borderRadius={5}
          variant="filled"
          placeholder="Search books by title"
          _placeholder={{color:"gray"}}
          bg={"white"}
          _focus={{ border: "3px solid #2d3748",}}
          _hover={{ bg: "white" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
