import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import DefaultInput from "../DefaultInput/DefaultInput";
import SignBtn from "../SignBtn/SignBtn";
import DefaultRadioBlock from "../DefaultRadioBlock/DefaultRadioBlock";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";

const SignModal = () => {
  return (
    <Box>
      <Box
        position={"fixed"}
        bg={"black"}
        opacity={0.3}
        height={"100vh"}
        zIndex={1000}
        width={"100%"}
        top={0}
        left={0}
      />
      <Box
        position={"fixed"}
        top={"50%"}
        left={"50%"}
        translate={"-50% -50%"}
        bg={"#F8F8F8"}
        borderRadius={"35px"}
        zIndex={1001}
        p={"30px"}
        w={"700px"}
      >
        <Heading
          textAlign={"center"}
          color={"#040404"}
          fontWeight={500}
          fontSize={"50px"}
          lineHeight={"53px"}
          mb={"40px"}
        >
          {HighlightText({
            text: "Оставьте вашу заявку",
            highlight: "Оставьте",
            color: "#969493",
          })}
        </Heading>
        <Flex flex="0 0 50%" direction={"column"} gap={"16px"}>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              ФИО
            </FormLabel>
            <DefaultInput placeholder="Ваше ФИО" />
          </Box>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              Номер телефона
            </FormLabel>
            <DefaultInput placeholder="Ваш контактный номер телефона" />
          </Box>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              E-Mail
            </FormLabel>
            <DefaultInput placeholder="Ваш E-mail" />
          </Box>
        </Flex>

        {/* right side */}
        <Flex direction={"column"} justifyContent={"space-between"}>
          <Text fontWeight={500} fontSize="18px" mb={"20px"}>
            Выберите вашу тему
          </Text>

          <DefaultRadioBlock />

          <SignBtn mt={"40px"} bg="#9EE778" color="black" iconSize={24}>
            Отправить заявку
          </SignBtn>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignModal;
