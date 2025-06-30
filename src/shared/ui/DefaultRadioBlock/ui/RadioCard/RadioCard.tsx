import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface IRadioCardProps {
  isChecked: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const RadioCard = ({ isChecked, setSelected, value }: IRadioCardProps) => {
  return (
    <Box
      as="label"
      cursor="pointer"
      borderRadius="20px"
      p="20px"
      display="flex"
      alignItems="center"
      gap="10px"
      border="1px solid #4D4D4D1A"
      bg={isChecked ? "green.100" : "white"}
      fontWeight="semibold"
      _hover={{ bg: isChecked ? "black.100" : "gray.100" }}
      transition="all 0.2s"
      onClick={() => setSelected(value)}
    >
      <Box
        w="24px"
        h="24px"
        flex="0 0 24px"
        borderRadius="full"
        border="2px solid"
        borderColor={isChecked ? "black.500" : "black.400"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isChecked && <Box w="10px" h="10px" bg="black" borderRadius="full" />}
      </Box>

      <Text
        fontWeight={600}
        fontSize="18px"
        wordBreak="keep-all"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        title={value}
      >
        {value}
      </Text>
    </Box>
  );
};

export default RadioCard;
