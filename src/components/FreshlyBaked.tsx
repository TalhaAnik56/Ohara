import {
  Box,
  Button,
  Card,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import image1 from "../assets/books/badol.png";
import image2 from "../assets/books/desheBideshe.png";
import image3 from "../assets/books/dianosour.jpg";
import image4 from "../assets/books/ekattor.png";
import image5 from "../assets/books/fairy.jpg";
import image9 from "../assets/books/kingKong.jpg";
import image13 from "../assets/books/neighbour.png";
import image14 from "../assets/books/norwich.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image9,
  image13,
  image14,
];

const FreshlyBaked = () => {
  return (
    <>
      <Box
        borderRadius={"10px"}
        bg={"#f7fcfc"}
        marginX={{ base: "20px", lg: "120px" }}
        marginY={{ base: "30px", lg: "40px" }}
        
    
      >
        <Box
          paddingX={{ base: "30px", lg: "40px" }}
          paddingY={{ base: "10px", lg: "40px" }}
        >
          <Grid
            templateAreas={{ base: `"text" "image"`, lg: `"text image"` }}
            templateColumns={{ base: "1fr", lg: ".35fr .65fr" }}
          >
            <GridItem area={"text"}>
              <Box>
                <Text
                  paddingTop={{ base: "15px", lg: "0px" }}
                  textAlign={"justify"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "25px", lg: "35px" }}
                >
                  Freshly Baked
                </Text>
                <Text
                  textAlign={"justify"}
                  marginY={{ base: "20px", lg: "25px" }}
                  fontSize={{ base: "12px", lg: "20px" }}
                  color={"ccc"}
                >
                  AbeBooks regularly publishes fascinating features about a huge
                  variety of bookish subjects, publishers, and interesting
                  characters in literature and notable anniversaries.
                </Text>
                <Box display={{ base: "none", lg: "block" }}>
                  <Button
                    variant={"outline"}
                    size="md"
                    fontSize="lg"
                    borderRadius="10px"
                    colorScheme="blue"
                    _hover={{ bg: "#2596be", color: "white" }}
                  >
                    Explore the list
                  </Button>
                </Box>
              </Box>
            </GridItem>

            <GridItem area={"image "}>
              <SimpleGrid
                paddingLeft={{ base: "0px", lg: "50px" }}
                spacing={{ base: "20px", lg: "20px" }}
                columns={{ base: 2, lg: 4 }}
              >
                {images.map((img) => (
                  <Card
                    overflow={"hidden"}
                    borderRadius={"5px"}
                    boxShadow="4px 4px 8px 0 rgba(0,0,0,0.2)"
                  >
                    <Image maxHeight={"250px"} objectFit={"cover"} src={img} />
                    <Text>Humayun Ahmed</Text>
                  </Card>
                ))}
              </SimpleGrid>
              <Box display={{ base: "block", lg: "none" }}>
                <Box
                  display={"flex"}
                  justifyContent={{ base: "center", lg: "normal" }}
                >
                  <Button
                    marginTop={"30px"}
                    variant={"outline"}
                    size="sm"
                    borderRadius="6px"
                    colorScheme="blue"
                    _hover={{ bg: "#2596be", color: "white" }}
                  >
                    Explore the list
                  </Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default FreshlyBaked;
