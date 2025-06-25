import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { REVIEWS_DATA } from "./consts";

const Reviews = () => {
  return (
    <Container>
      <Box textAlign={"center"} p={"160px 0"}>
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

        <Flex gap={"40px"}>
          {REVIEWS_DATA.map((review) => (
            <ReviewCard data={review} />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default Reviews;
