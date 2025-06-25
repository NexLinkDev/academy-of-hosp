import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface IFaqItemProps {
  data: {
    question: string;
    answer: string;
  };
}

const FaqItem = ({ data }: IFaqItemProps) => {
  return (
    <Box
      cursor={"pointer"}
      borderRadius={"25px"}
      bg={"#F8F8F8"}
      p={"20px"}
      w={"80%"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={"18px"} fontWeight={500} as={"h5"}>
          {data.question}
        </Heading>
        <Text>{">"}</Text>
      </Flex>
      <Text
        mt={"20px"}
        textAlign={"start"}
        fontSize={"16px"}
        fontWeight={400}
        color={"#737373"}
      >
        {data.answer}
      </Text>
    </Box>
  );
};

export default FaqItem;
