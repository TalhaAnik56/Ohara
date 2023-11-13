import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BodyContentContainer = ({ children }: Props) => {
  return (
    <Box
      fontFamily={"monospace"}
      paddingX={{ base: "20px", lg: "150px" }}
    >
      {children}
    </Box>
  );
};

export default BodyContentContainer;
