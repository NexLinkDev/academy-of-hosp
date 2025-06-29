import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Flex, Heading, Text } from "@chakra-ui/react";

const AboutUsHeader = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      alignItems={{ base: "start", lg: "end" }}
      justifyContent={"space-between"}
      gap={"30px"}
    >
      <Heading
        as={"h2"}
        fontWeight={500}
        fontSize={{ base: "37px", md: "50px" }}
        lineHeight={{ base: "40px", md: "53px" }}
        color={"#101010"}
      >
        {HighlightText({
          text: "Старт в гостеприимство \n за 7 дней",
          highlight: "за 7 дней",
          color: "#969493",
        })}
      </Heading>

      <Text
        maxWidth={"370px"}
        fontSize={"16px"}
        fontWeight={400}
        color={"#101010"}
      >
        Обучение с реальной практикой, международным сертификатом и шансом на
        трудоустройство в лучших отелях и кафе страны
      </Text>
    </Flex>
  );
};

export default AboutUsHeader;
