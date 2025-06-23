import { Flex, Heading, Text } from "@chakra-ui/react";

const AboutUsHeader = () => {
  return (
    <Flex alignItems={"end"} justifyContent={"space-between"}>
      <Heading
        color={"white"}
        as={"h2"}
        fontWeight={500}
        fontSize={"50px"}
        lineHeight={"53px"}
      >
        Старт в гостеприимство
        <Text as="span" color="#969493" display={"block"}>
          за 7 дней
        </Text>
      </Heading>

      <Text maxWidth={"370px"} color={"white"}>
        Обучение с реальной практикой, международным сертификатом и шансом на
        трудоустройство в лучших отелях и кафе страны
      </Text>
    </Flex>
  );
};

export default AboutUsHeader;
