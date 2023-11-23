import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import demo from "../assets/demo/demo.webp";

const Demo = () => {
  return (
    <>
      <Box
        borderRadius={"10px"}
        bg={"#f7fcfc"}
        marginX={{ base: "20px", lg: "120px" }}
        marginTop={{ base: "30px", lg: "60px" }}
      >
        <Box paddingX={"40px"} paddingY={"40px"}>
          <Grid templateAreas={`"image text"`} templateColumns={"1fr 1fr"}>
            <GridItem area={"image "}>
              <Image borderRadius={"10px"} src={demo} objectFit={"cover"} />
            </GridItem>
            <GridItem area={"text"}>
              <Box
                paddingLeft={"50px"}
                fontFamily={"monospace"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <Box>
                  <Text fontWeight={"bold"} fontSize={"30px"}>
                    Most expensive sales from July to September 2023
                  </Text>
                  <Text marginTop={"20px"} fontSize={"20px"} color={"ccc"}>
                    A spectacular, 1,200 year old manuscript, iconic works by
                    Oscar Wilde, T. S. Eliot, Aldous Huxley, and George Orwell,
                    and more fantastic books sold by expert sellers.
                  </Text>
                  <Button
                    marginTop={"20px"}
                    variant={"outline"}
                    paddingX={"20px"}
                    borderRadius={"20px"}
                    colorScheme="blue"
                    _hover={{ bg: "#2596be", color: "white" }}
                  >
                    See the list
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

export default Demo;
