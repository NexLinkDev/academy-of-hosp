import { Button, Flex, Text, VStack } from "@chakra-ui/react";

const IntroSign = () => {
  return (
    <VStack
      width={"377px"}
      position={"absolute"}
      right={"70px"}
      top={"370px"}
      gap={"30px"}
    >
      <Text fontWeight={400} fontSize={"16px"} color={"#737373"}>
        Обучение с реальной практикой, международным сертификатом и шансом на
        трудоустройство в лучших отелях и кафе страны
      </Text>

      <Button
        height={"54px"}
        padding={"16px 0"}
        width={"100%"}
        fontWeight={"500"}
        fontSize={"18px"}
        color={"#FFFFFF"}
        borderRadius={"100px"}
      >
        Записаться на курс
      </Button>
    </VStack>
  );
};

export default IntroSign;
