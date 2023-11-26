import {
  Box,
  Button,
  Card,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import adventure from "../assets/checkThisOut/adventure.webp";
import drama from "../assets/checkThisOut/drama.webp";
import horror from "../assets/checkThisOut/horror.webp";
import scienceFiction from "../assets/checkThisOut/scienceFiction.webp";

const cards = [
  { image: drama, title: "Drama" },
  { image: horror, title: "Horror" },
  { image: scienceFiction, title: "Science Fiction" },
  { image: adventure, title: "Adventure" },
];

const CheckThisOut = () => {
  return (
    <Box
      marginX={{ base: "40px", lg: "120px" }}
      marginY={{ base: "30px", lg: "40px" }}
    >
      <SimpleGrid spacing={{ base: "20px", lg: "30px" }} columns={{ base: 1, lg: 4 }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            borderRadius="10px"
            overflow={"hidden"}
          >
            <Image objectFit={"cover"} src={card.image} />

            <Box
              paddingX={{ base: "10px", lg: "25px" }}
              paddingY={{ base: "10px", lg: "10px" }}
              textAlign={"justify"}
            >
              <Text
                fontWeight={"semibold"}
                fontSize={{ base: "20px", lg: "25px" }}
                as={"h1"}
                marginBottom={{ base: "10px", lg: "10px" }}
              >
                {card.title}
              </Text>
              <Text
                color={"gray.700"}
                fontSize={"sm"}
                marginBottom={{ base: "10px", lg: "15px" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                quidem doloribus suscipit non doloremque!
              </Text>

              <Button
                bg={"white"}
                _hover={{ bg: "white" }}
                paddingX={"0px"}
                paddingTop={"0px"}
              >
                <HStack
                  color="#2596be"
                  _hover={{
                    "& > svg": {
                      transform: "translateX(8px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <Text>{"Check out all"}</Text>
                  <Icon as={FaArrowRight}></Icon>
                </HStack>
              </Button>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CheckThisOut;
