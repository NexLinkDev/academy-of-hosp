import DefaultInput from "@/shared/ui/DefaultInput/DefaultInput";
import DefaultRadioBlock from "@/shared/ui/DefaultRadioBlock/DefaultRadioBlock";
import SignBtn from "@/shared/ui/SignBtn/SignBtn";
import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Text } from "@chakra-ui/react";

const FooterForm = () => {
  return (
    <form>
      <Flex gap="40px" mb="100px">
        {/* left side */}
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
          <SignBtn bg="#9EE778" color="black" iconSize={24}>
            Отправить заявку
          </SignBtn>
        </Flex>
      </Flex>
    </form>
  );
};

export default FooterForm;
