import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import infoSvg from "@/shared/assets/images/svg/info-circle.svg";
import GradientText from "@/shared/ui/GradientText/GradientText";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { IABOUT_CARDS } from "../../consts";

interface IAboutUsCardProps {
  data: IABOUT_CARDS;
}

const AboutUsCard = ({ data }: IAboutUsCardProps) => {
  return (
    <Flex
      bg="#F8F8F8"
      borderRadius="25px"
      justifyContent="start"
      gap={{ base: "16px", md: "20px" }}
      p={{ base: "20px", md: "26px" }}
      direction="column"
      height="100%"
    >
      <Box
        w="60px"
        h="60px"
        borderRadius="50%"
        bg="linear-gradient(90deg, #C85EDC -42%, #8C5EDB 73.38%)"
        position="relative"
      >
        <Image
          borderRadius="50%"
          src={infoSvg}
          w="24px"
          h="24px"
          objectFit="contain"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>

      <Box
        height="1px"
        width="124px"
        bg="linear-gradient(90deg, #C85EDC -42%, #8C5EDB 73.38%)"
      />

      <GradientText
        fontWeight={500}
        fontSize={"26px"}
        gradient="linear-gradient(90deg, #C85EDC -42%, #8C5EDB 73.38%)"
      >
        {data.title}
      </GradientText>

      {Array.isArray(data.list) ? (
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "16px", md: "24px" }}
        >
          {data.list.map((item, i) => (
            <Flex
              key={i}
              direction="column"
              gap="12px"
              p="16px"
              minH="170px"
              bg="#FFFFFF"
              borderRadius="20px"
            >
              <Heading as="h4" fontSize={"20px"} fontWeight={600}>
                {item.title}
              </Heading>
              <Text fontSize={"17px"} fontWeight={400} color="#737373">
                {item.text}
              </Text>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Text fontWeight={600} fontSize={"17px"} color="#737373">
          {HighlightText({
            text: data.text,
            highlight: data.highlight,
          })}
        </Text>
      )}
    </Flex>
  );
};

export default AboutUsCard;
