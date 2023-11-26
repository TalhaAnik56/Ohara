import {
  Box,
  Button,
  Card,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import image1 from "../assets/cheap/cheap1.webp";
import image2 from "../assets/cheap/cheap2.webp";
import image3 from "../assets/cheap/cheap3.webp";
import image4 from "../assets/cheap/cheap4.webp";
import image5 from "../assets/cheap/cheap5.webp";
import image6 from "../assets/cheap/cheap6.webp";

import icon from "../assets/icons/affordAble.png"

const images = [image1, image2, image3, image4, image5, image6];

const CheapBooksBanner = () => {
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
            Books Under 200 BDT
          </Text>

          <Image
            height={{ base: "30px", lg: "40px" }}
            objectFit={"cover"}
            src={icon}
          />
        </HStack>
        <SimpleGrid
          spacing={{ base: "10px", lg: "20px" }}
          columns={{ base: 3, lg: 6 }}
        >
          {images.map((img, index) => (
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

export default CheapBooksBanner;
