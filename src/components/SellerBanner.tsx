import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import sellerImage from "../assets/sellerBanner.webp";

const SellerBanner = () => {
  return (
    <>
      <Box
        borderRadius={"10px"}
        bg={"#f7fcfc"}
        marginX={{ base: "20px", lg: "120px" }}
        marginY={{ base: "30px", lg: "40px" }}
      >
        <Box paddingX={{base:"25px",lg:"40px"}} paddingY={{base:"25px",lg:"40px"}}>
          <Grid
            templateAreas={{ base: `"image" "text"`, lg: `"image text"` }}
            templateColumns={{ base: "1fr", lg: ".35fr .65fr" }}
          >
            <GridItem area={"image "}>
              <Image borderRadius={"10px"} src={sellerImage} objectFit={"cover"} />
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
                    Hey, Why don't you become a <Text as={"span"} color="green.400">Seller</Text> and earn money?
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
                      colorScheme="green"
                      _hover={{ bg: "green.400", color: "white" }}
                    >
                      Become a seller
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

export default SellerBanner;
