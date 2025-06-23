import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <Container>
      <Box textAlign={"center"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #C85EDC"}
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
      </Box>
    </Container>
  );
};

export default Faq;
