import { Box, Button, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
//import image1 from "../assets/books/badol.png";
//import image2 from "../assets/books/desheBideshe.png";
//import image3 from "../assets/books/dianosour.jpg";
//import image4 from "../assets/books/ekattor.png";
//import image5 from "../assets/books/fairy.jpg";
import image6 from "../assets/books/fury.jpg";
import image7 from "../assets/books/got.jpg";
import image8 from "../assets/books/gun.jpg";
//import image9 from "../assets/books/kingKong.jpg";
//mport image10 from "../assets/books/kracherCornel.png";
import image11 from "../assets/books/mourinho.jpg";
import image12 from "../assets/books/mujibur.png";
import image13 from "../assets/books/neighbour.png";
import image14 from "../assets/books/norwich.jpg";
import image15 from "../assets/books/obonil.png";
import image16 from "../assets/books/prequel.jpg";
import image17 from "../assets/books/tiger.png";
//import image18 from "../assets/books/tower.jpg";

const images = [
  //image1,
  //image2,
  //image3,
  //image4,
  //image5,
  image6,
  image7,
  image8,
  //image9,
  //image10,
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
        marginTop={{ base: "30px", lg: "70px" }}
        borderBottom={"1px solid #ccc"}
      >
        <Text
          paddingBottom={"20px"}
          fontWeight={"bold"}
          as={"h1"}
          fontFamily={"monospace"}
          fontSize={"30px"}
        >
          Top Selling
        </Text>
        <SimpleGrid spacing={"50px"} columns={5}>
          {images.map((img) => (
            <Card overflow={"hidden"} borderRadius={"5px"} >
              <Image maxHeight={"250px"} objectFit={"cover"} src={img} />
              <Text>Humayun Ahmed</Text>
            </Card>
          ))}
        </SimpleGrid>
        <Box marginTop={"40px"} marginBottom={"20px"} display={"flex"} justifyContent={"center"}>
          <Button
            variant={"outline"}
            paddingX={"30px"}
            borderRadius={"20px"}
            colorScheme="blue"
            _hover={{bg:"#2596be",color:"white"}}
          >
            See More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BookGrid;
