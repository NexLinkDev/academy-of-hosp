import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CONTACTS_DATA } from "../../consts";

const Contacts = () => {
  return (
    <Flex gap={"27px"}>
      <Box flex={"0 0 50%"}>
        <Heading mb={"40px"} fontWeight={500} fontSize={"50px"} as={"h2"}>
          Контакты
        </Heading>

        <Text color={"#737373"} fontSize={"16px"} fontWeight={400}>
          Свяжитесь с нами сегодня, чтобы узнать, как “Academy Hospitality and
          Management” может стать вашим надёжным партнёром на пути к успеху!
        </Text>
      </Box>

      <Flex flex={"0 0 50%"} flexWrap={"wrap"} gap={"50px"}>
        {CONTACTS_DATA.map((contact) => (
          <Box>
            <Text fontSize={"18px"} fontWeight={500} mb={"20px"}>
              {contact.label}
            </Text>
            <Text cursor={"pointer"} fontSize={"24px"} fontWeight={600}>
              {contact.value}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Contacts;
