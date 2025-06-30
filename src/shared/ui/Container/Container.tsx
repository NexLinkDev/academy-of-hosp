import { Box } from "@chakra-ui/react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW="1380px" px={{ base: "15px", xl: "0" }} mx="auto">
      {children}
    </Box>
  );
};

export default Container;
