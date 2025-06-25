import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Contacts from "./ui/Contacts/Contacts";

const Footer = () => {
  return (
    <Container>
      <Box bg={"#F8F8F8"} borderRadius={"35px"} p={"30px"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #C85EDC"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
        >
          Обратная связь
        </Text>

        <Heading
          as={"h2"}
          fontWeight={500}
          fontSize={"50px"}
          lineHeight={"53px"}
          color={"#040404"}
          m={"20px 0 40px"}
        >
          {HighlightText({
            text: `Оставьте вашу заявку`,
            highlight: "Оставьте",
            color: "#969493",
          })}
        </Heading>

        <Contacts />

        <Flex
          mt={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex gap={"17px"} alignItems={"center"}>
            <Box
              w={"40px"}
              h={"40px"}
              border={"1px solid #181818"}
              borderRadius={"50%"}
            ></Box>
            <Box
              w={"40px"}
              h={"40px"}
              border={"1px solid #181818"}
              borderRadius={"50%"}
            ></Box>
            <Box
              w={"40px"}
              h={"40px"}
              border={"1px solid #181818"}
              borderRadius={"50%"}
            ></Box>
          </Flex>

          <Text color={"#4C3CDE"} fontSize={"18px"} fontWeight={500}>
            © 2025 Academy of Hospitality & Management все права защищены
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Footer;
