import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CONTACTS_DATA } from "../../consts";
import { Element } from "react-scroll";

const Contacts = () => {
  return (
    <Element name="contacts">
      <Flex gap={"27px"} direction={{ base: "column", lg: "row" }}>
        <Box flex={"0 0 50%"}>
          <Heading
            mb={"40px"}
            fontWeight={500}
            fontSize={{ base: "46px", md: "50px" }}
            as={"h2"}
          >
            Контакты
          </Heading>

          <Text color={"#737373"} fontSize={"16px"} fontWeight={400}>
            Свяжитесь с нами сегодня, чтобы узнать, как “Academy Hospitality and
            Management” может стать вашим надёжным партнёром на пути к успеху!
          </Text>
        </Box>

        <Flex
          flex={"0 0 50%"}
          flexWrap={"wrap"}
          gap={"50px"}
          direction={{ base: "column", lg: "row" }}
        >
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
    </Element>
  );
};

export default Contacts;
