import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BodyContentContainer = ({ children }: Props) => {
  return <Box paddingX={{ base: "50px", lg: "80px" }}>{children}</Box>;
};

export default BodyContentContainer;
