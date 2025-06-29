import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import defaultImg from "@/shared/assets/images/png/firstCourse.jpg";

interface IReviewCardProps {
  data: { name: string; job: string; text: string };
}

const ReviewCard = ({ data }: IReviewCardProps) => {
  return (
    <Flex
      bg={"#F8F8F8"}
      borderRadius={"25px"}
      maxW={{ base: "100%", md: "400px" }}
      direction={"column"}
    >
      <Image src={defaultImg} w={"100%"} h={"260px"} borderRadius={"25px"} />

      <Box p={"26px"}>
        <Flex mb={"24px"} gap={"12px"} alignItems={"center"}>
          <Image
            src={defaultImg}
            w={"50px"}
            h={"50px"}
            objectFit={"cover"}
            borderRadius={"50%"}
          />

          <Flex direction={"column"} alignItems={"start"}>
            <Heading fontSize={"16px"} fontWeight={700} as={"h6"}>
              {data.name}
            </Heading>
            <Text color={"#090909"} fontSize={"13px"} fontWeight={300}>
              {data.job}
            </Text>
          </Flex>
        </Flex>

        <Text
          textAlign={"start"}
          color={"#212121"}
          fontSize={"16px"}
          fontWeight={400}
        >
          <Text
            textAlign={"start"}
            fontSize={"66px"}
            fontWeight={600}
            mb={"-20px"}
          >
            “
          </Text>
          {data.text}
          <Text textAlign={"end"} fontSize={"66px"} fontWeight={600}>
            ”
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default ReviewCard;
