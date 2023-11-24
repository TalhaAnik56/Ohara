import { Box, Button, Grid, GridItem, Image, Show, Text } from "@chakra-ui/react";
import tradingImage from "../assets/tradingBanner.jpg";

const TradingBanner = () => {
  return (
    <Grid
      templateAreas={{base:`"text"`,lg:`"text image"`}}
      templateColumns={{base:"1fr",lg:".6fr .4fr"}}
      marginX={{ base: "20px", lg: "120px" }}
      marginTop={{ base: "30px", lg: "70px" }}
      bg={"#232f3e"}
      borderRadius={"10px"}
      overflow={"hidden"}
    > 
      <GridItem  area={"text"}>
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          paddingX={{base:"30px",lg:"40px"}}
          color={"white"}
        >
          <Box paddingY={{base:"10px",lg:"0px"}}>
            <Text paddingBottom={{base:"5px",lg:"10px"}} fontSize={{base:"25px",lg:"30px"}} as={"header"}>
              Trade books with people
            </Text>

            <Text paddingBottom={"15px"} fontSize={"15px"}>
              If you love deals on books, this is the place for you. We're
              offering millions of cheap books priced under $10 with free US
              shipping
            </Text>

            <Button
              _hover={{ bg: "#536f93", color: "white", }}
              variant={"outline"}
              color={"white"}
              bg={"#232f3e"}
              size={"sm"}
            >
              See the list
            </Button>
          </Box>
        </Box>
      </GridItem>

     <Show above="lg">
      <GridItem area="image">
        <Image
          width={"100%"}
          height={"180px"}
          objectFit={"cover"}
          src={tradingImage}
        ></Image>
      </GridItem>
      </Show>
    </Grid>
  );
};

export default TradingBanner;
