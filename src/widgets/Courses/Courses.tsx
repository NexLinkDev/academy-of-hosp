import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import CoursesCard from "./ui/CoursesCard/CoursesCard";
import { COURSE_CARDS } from "./consts";

const Courses = () => {
  return (
    <Container>
      <VStack p={"160px 0 0 0"} textAlign={"center"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #C85EDC"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
        >
          Курсы
        </Text>

        <Heading
          color={"#101010"}
          fontSize={"50px"}
          fontWeight={500}
          lineHeight={"53px"}
          maxW={"800px"}
          m={"20px 0 40px 0"}
        >
          {HighlightText({
            text: "Выберите профессию, которая откроет новые возможности",
            highlight: "новые возможности",
            color: "#969493",
          })}
        </Heading>

        <Text
          maxW={"650px"}
          fontSize={"16px"}
          fontWeight={400}
          color={"#737373"}
          mb={"40px"}
        >
          Международная онлайн-платформа{" "}
          <Link color={"#040404"} fontWeight={500} textDecoration={"underline"}>
            Lobster Ink.
          </Link>{" "}
          популярна более чем в{" "}
          <Text as={"span"} color={"#6BCC39"}>
            140 странах
          </Text>{" "}
          мира и Вы можете пройти курсы в таких направлений как:
        </Text>

        <VStack gap={"40px"}>
          {COURSE_CARDS.map((course) => (
            <CoursesCard data={course} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Courses;
