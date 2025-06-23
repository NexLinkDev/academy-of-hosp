import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import lobstekSvg from "@/shared/assets/images/svg/lobstek.svg";
import Container from "@/shared/ui/Container/Container";

const Videos = () => {
  return (
    <Container>
      <VStack textAlign={"center"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #C85EDC"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
        >
          Как проходит наше обучение
        </Text>

        <Heading
          fontWeight={500}
          fontSize={"48px"}
          lineHeight={"53px"}
          color={"#101010"}
          m={"20px 0 40px"}
        >
          {HighlightText({
            text: `Учитесь через практику, отрабатывайте навыки, проходите стажировку с уверенным стартом профессии`,
            highlight: "с уверенным стартом профессии",
            color: "#969493",
          })}
        </Heading>

        <Text
          fontWeight={400}
          fontSize={"16px"}
          lineHeight={"130%"}
          color={"#212121"}
          maxW={"580px"}
        >
          У нас есть партнёрства со многими отелями мира, кафе и международной
          платформой Lobster Ink
        </Text>

        <Image m={"20px 0 40px"} src={lobstekSvg} w={"245px"} h={"50px"} />
      </VStack>
    </Container>
  );
};

export default Videos;
