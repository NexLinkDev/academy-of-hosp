import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Contacts from "./ui/Contacts/Contacts";
import FooterForm from "./ui/FooterForm/FooterForm";
import { NETWORKS_DATA } from "./consts";

const Footer = () => {
  return (
    <Container>
      <Box bg={"#F8F8F8"} borderRadius={"35px"} p={"30px"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #8C5EDB"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
          bg={"white"}
        >
          Обратная связь
        </Text>

        <Heading
          as={"h2"}
          fontWeight={500}
          fontSize={{ base: "37px", md: "50px" }}
          lineHeight={{ base: "40px", md: "53px" }}
          color={"#040404"}
          m={"20px 0 40px"}
        >
          {HighlightText({
            text: `Оставьте вашу заявку`,
            highlight: "Оставьте",
            color: "#969493",
          })}
        </Heading>

        <FooterForm />
        <Contacts />

        <Flex
          mt={"60px"}
          alignItems={{ base: "start", lg: "center" }}
          gap={"30px"}
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex gap={"17px"} alignItems={"center"}>
            {NETWORKS_DATA.map((item) => (
              <Link
                href={item.link}
                w={"40px"}
                h={"40px"}
                border={"1px solid #181818"}
                borderRadius={"50%"}
                textAlign={"center"}
                cursor={"pointer"}
                position={"relative"}
              >
                <Image
                  src={item.icon}
                  objectFit={"contain"}
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  translate="-50% -50%"
                />
              </Link>
            ))}
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
