import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import footerLight from "../assets/footer/footer-lights.svg";
import switchImage from "../assets/footer/light.svg";
import mainFooter from "../assets/footer/mainFooter.svg";
import '@fontsource/caveat-brush';

const Footer = () => {
  const [turn,setTurn]=useState(false)

  return (
      <Box>
      <Box position={"relative"} marginTop={"150px"}>
      <Image
        position="absolute"
        top={0}
        left={0}
        height={{ base: '300px', lg: '300px' }}
        objectFit="cover"
        src={mainFooter}
      />

      <Box height={{ base: '300px', lg: '300px' }}>
        <Image
        display={turn?"block":"none"}
        height={{ base: '300px', lg: '300px' }}
        objectFit="cover"
        zIndex={1}
        src={footerLight}
      />
      </Box>

      <Image
        cursor={"pointer"}
        onClick={()=>setTurn(!turn)}
        position={"absolute"}
        top={{base:"50px",lg:"130px"}}
        left={{base:"20px",lg:"306px"}}
        zIndex={2}
        objectFit="cover"
        boxSize="30px"
        src={switchImage}
      /> 
    </Box>

    <Box paddingX={"40px"} paddingY={"60px"} bg={'#005caa'} color={"white"} textAlign={"end"}>
      <Text fontSize={"25px"}>Proudly made by</Text>
      <Text fontFamily={"Caveat Brush"} fontSize={"30px"}>Talha Anik</Text>
    </Box>


    </Box>
  );
};
export default Footer;
