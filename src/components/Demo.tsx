import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import demo from "../assets/demo/demo.webp";

const Demo = () => {
  return (
    <>
      <Box
        borderRadius={"10px"}
        bg={"#f7fcfc"}
        marginX={{ base: "20px", lg: "120px" }}
        marginY={{ base: "30px", lg: "40px" }}
        
      >
        <Box paddingX={{base:"20px",lg:"40px"}} paddingY={{base:"25px",lg:"40px"}}>
          <Grid
            templateAreas={{ base: `"image" "text"`, lg: `"image text"` }}
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          >
            <GridItem area={"image "}>
              <Image borderRadius={"10px"} src={demo} objectFit={"cover"} />
            </GridItem>
            <GridItem area={"text"}>
              <Box
                paddingLeft={{ base: "0px", lg: "50px" }}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={{ base: "center" }}
              >
                <Box>
                  <Text
                    paddingTop={{ base: "15px", lg: "0px" }}
                    textAlign={"justify"}
                    fontWeight={"semibold"}
                    fontSize={{ base: "25px", lg: "35px" }}
                  >
                    Most expensive sales from July to September 2023
                  </Text>
                  <Text
                    textAlign={"justify"}
                    marginTop={"20px"}
                    fontSize={{ base: "12px", lg: "17px" }}
                    color={"ccc"}
                  >
                    A spectacular, 1,200 year old manuscript, iconic works by
                    Oscar Wilde, T. S. Eliot, Aldous Huxley, and George Orwell,
                    and more fantastic books sold by expert sellers.
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={{ base: "center", lg: "normal" }}
                  >
                    <Button
                      marginTop={"20px"}
                      variant={"outline"}
                      size={{ base: "sm", lg: "md" }}
                      fontSize={{ base: "normal", lg: "lg" }}
                      borderRadius={{ base: "6px", lg: "10px" }}
                      colorScheme="blue"
                      _hover={{ bg: "#2596be", color: "white" }}
                    >
                      See the list
                    </Button>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Demo;
