import {
  Box,
  Button,
  Card,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
//import image1 from "../assets/books/badol.png";
//import image2 from "../assets/books/desheBideshe.png";
//import image3 from "../assets/books/dianosour.jpg";
//import image4 from "../assets/books/ekattor.png";
//import image5 from "../assets/books/fairy.jpg";
import image6 from "../assets/books/fury.jpg";
import image7 from "../assets/books/got.jpg";
import image8 from "../assets/books/gun.jpg";
import image9 from "../assets/books/kingKong.jpg";
import image10 from "../assets/books/kracherCornel.png";
import image11 from "../assets/books/mourinho.jpg";
import image12 from "../assets/books/mujibur.png";
import image13 from "../assets/books/neighbour.png";
import image14 from "../assets/books/norwich.jpg";
import image15 from "../assets/books/obonil.png";
import image16 from "../assets/books/prequel.jpg";
import image17 from "../assets/books/tiger.png";
//import image18 from "../assets/books/tower.jpg";

import glittering from "../assets/icons/glittering.png";

const images = [
  //image1,
  //image2,
  //image3,
  //image4,
  //image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  //image18,
];

const BookGrid = () => {
  return (
    <>
      <Box
        marginX={{ base: "20px", lg: "120px" }}
        marginY={{ base: "30px", lg: "40px" }}
        borderBottom={"1px solid #ccc"}
      >
        <HStack marginBottom={"20px"}>
          <Text
            fontWeight={"semibold"}
            as={"h1"}
            fontSize={{ base: "25px", lg: "30px" }}
          >
            Top Selling
          </Text>

          <Image
            height={{ base: "25px", lg: "35px" }}
            objectFit={"cover"}
            src={glittering}
          />
        </HStack>
        <SimpleGrid
          spacing={{ base: "10px", lg: "20px" }}
          columns={{ base: 3, lg: 6 }}
        >
          {images.map((img,index) => (
            <Card key={index} overflow={"hidden"} borderRadius={"5px"}>
              <Image maxHeight={"250px"} objectFit={"cover"} src={img} />
              <Text>Humayun Ahmed</Text>
            </Card>
          ))}
        </SimpleGrid>
        <Box
          marginTop={"40px"}
          marginBottom={"20px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            variant={"outline"}
            size={{ base: "sm", lg: "md" }}
            fontSize={{ base: "normal", lg: "lg" }}
            borderRadius={{ base: "6px", lg: "10px" }}
            colorScheme="blue"
            _hover={{ bg: "#2596be", color: "white" }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BookGrid;
