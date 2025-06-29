import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import FaqItem from "./ui/FaqItem";
import { FAQ_DATA } from "./consts";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <Container>
      <Box textAlign={"center"} pb={"160px"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #8C5EDB"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
        >
          FAQ
        </Text>

        <Heading
          as={"h2"}
          fontWeight={500}
          fontSize={"48px"}
          lineHeight={"53px"}
          color={"#101010"}
          m={"20px 0 40px"}
        >
          {HighlightText({
            text: `Часто задаваемые вопросы`,
            highlight: "Часто",
            color: "#969493",
          })}
        </Heading>

        <Text fontWeight={400} fontSize={"16px"} color={"#737373"}>
          Мы собрали ответы на вопросы, которые чаще всего задают наши будущие
          студенты. <br /> Если останутся сомнения — пишите, мы всегда на связи!
        </Text>

        <Flex
          mt={"40px"}
          direction={"column"}
          gap={"20px"}
          alignItems={"center"}
        >
          {FAQ_DATA.map((question) => (
            <FaqItem
              key={question.id}
              data={question}
              isOpen={isOpen}
              handleOpen={handleOpen}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default Faq;
