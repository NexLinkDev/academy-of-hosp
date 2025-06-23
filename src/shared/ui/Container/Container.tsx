import { Box } from "@chakra-ui/react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW="1380px" px="30px" mx="auto">
      {children}
    </Box>
  );
};

export default Container;
