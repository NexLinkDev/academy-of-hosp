import Container from "@/shared/ui/Container/Container";
import GradientText from "@/shared/ui/GradientText/GradientText";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import guySvg from "@/shared/assets/images/svg/Photo.svg";
import columnsSvg from "@/shared/assets/images/svg/Columns.svg";
import CircularText from "./ui/CircularText/CircularText";
import IntroSign from "./ui/IntroSign/IntroSign";
import Header from "../Header/Header";
import SignBtn from "@/shared/ui/SignBtn/SignBtn";

const Intro = () => {
  return (
    <Container>
      <Box
        position={"relative"}
        background={"#F8F8F8"}
        borderRadius={"35px"}
        height={"800px"}
        p={{ base: "15px", md: "30px" }}
      >
        <Header />

        <Box pt={{ base: "30px", sm: "70px", md: "110px" }}>
          <GradientText
            heading={"h1"}
            fontWeight={"500"}
            fontSize={{ base: "54px", lg: "74px" }}
            lineHeight={{ base: "52px", lg: "78px" }}
            gradient="linear-gradient(90deg, #C85EDC 0%, #8A8DD4 30.29%, #4720D5 47.6%, #8C5EDB 81.25%);"
            textAlign={"center"}
          >
            Выбери свой путь к <br /> успеху!
          </GradientText>
          <Flex
            display={{ base: "flex", xl: "none" }}
            direction={"column"}
            alignItems={"center"}
            gap={"26px"}
            mt={"26px"}
          >
            <Text
              fontWeight={400}
              fontSize={"16px"}
              color={"#737373"}
              textAlign={"center"}
            >
              Обучение с реальной практикой, международным сертификатом и шансом
              на трудоустройство в лучших отелях и кафе страны
            </Text>

            <SignBtn
              w={{ base: "100%", sm: "70%" }}
              color={"#FFFFFF"}
              bg="black"
            />
          </Flex>
        </Box>

        <Box>
          <Box
            position={"absolute"}
            bottom={"0"}
            left={"50%"}
            transform={"translateX(-50%)"}
            width={{ base: "100%", xl: "70%" }}
          >
            <Image
              src={columnsSvg}
              width={"100%"}
              objectFit={{ base: "cover", xl: "contain" }}
              objectPosition={"bottom"}
              height={{ base: "400px", xl: "465px" }}
              alt=""
            />
          </Box>
          <Box
            position={"absolute"}
            bottom={"0"}
            left={"50%"}
            transform={"translateX(-50%)"}
            w={"100%"}
          >
            <Image
              src={guySvg}
              width={"100%"}
              objectFit={"contain"}
              objectPosition={"bottom"}
              height={{ base: "390px", xl: "495px" }}
              alt=""
            />
          </Box>
        </Box>

        <Box display={{ base: "none", lg: "block" }}>
          <CircularText size={187} textSize={12} />
        </Box>
        <Box display={{ base: "none", xl: "block" }}>
          <IntroSign />
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;
