import SignBtn from "@/shared/ui/SignBtn/SignBtn";
import { Text, VStack } from "@chakra-ui/react";

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

      <SignBtn color={"#FFFFFF"} bg="black" />
    </VStack>
  );
};

export default IntroSign;
