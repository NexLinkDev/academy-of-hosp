import Container from "@/shared/ui/Container/Container";
import GradientText from "@/shared/ui/GradientText/GradientText";
import { Box, Image } from "@chakra-ui/react";
import guySvg from "@/shared/assets/images/svg/Photo.svg";
import columnsSvg from "@/shared/assets/images/svg/Columns.svg";
import CircularText from "./ui/CircularText/CircularText";
import IntroSign from "./ui/IntroSign/IntroSign";

const Intro = () => {
  return (
    <Container>
      <Box
        position={"relative"}
        background={"#F8F8F8"}
        borderRadius={"35px"}
        height={"800px"}
      >
        <GradientText
          heading={"h1"}
          pt={"190px"}
          fontWeight={"500"}
          fontSize={"74px"}
          gradient="linear-gradient(90deg, #C85EDC 0%, #8A8DD4 30.29%, #4720D5 47.6%, #8C5EDB 81.25%);"
          textAlign={"center"}
        >
          Выбери свой путь к <br /> успеху!
        </GradientText>

        <Box>
          <Box
            position={"absolute"}
            bottom={"0"}
            left={"50%"}
            transform={"translateX(-50%)"}
            width={"70%"}
          >
            <Image
              src={columnsSvg}
              width={"100%"}
              objectFit={"contain"}
              objectPosition={"bottom"}
              height={"465px"}
              alt=""
            />
          </Box>
          <Box
            position={"absolute"}
            bottom={"0"}
            left={"50%"}
            transform={"translateX(-50%)"}
          >
            <Image
              src={guySvg}
              width={"100%"}
              objectFit={"contain"}
              objectPosition={"bottom"}
              height={"495px"}
              alt=""
            />
          </Box>
        </Box>

        <CircularText size={187} textSize={12} />
        <IntroSign />
      </Box>
    </Container>
  );
};

export default Intro;
