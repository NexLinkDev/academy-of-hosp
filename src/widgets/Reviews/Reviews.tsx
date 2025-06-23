import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Heading, Text } from "@chakra-ui/react";

const Reviews = () => {
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
          Отзывы
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
            text: `Отзывы тех, кто уже прошёл \n обучение и начал карьеру`,
            highlight: "Отзывы тех,",
            color: "#969493",
          })}
        </Heading>
      </Box>
    </Container>
  );
};

export default Reviews;
