import { Button, Flex, Image } from "@chakra-ui/react";
import logoSvg from "@/shared/assets/images/svg/logo.svg";
import rocketSvg from "@/shared/assets/images/svg/rocket.svg";
import GradientBorderButton from "@/shared/ui/GradientBorder/GradientBorderButton";
import Container from "@/shared/ui/Container/Container";

const Header = () => {
  return (
    <Container>
      <Flex height={"50px"} align="center" justify="space-between">
        <Image
          width="252px"
          height="58px"
          objectFit="contain"
          src={logoSvg}
          alt="Logo"
        />

        <Flex height={"100%"}>
          <Button
            background={"none"}
            border={"1px solid white"}
            borderRadius={"100px"}
            padding={"15px 20px"}
            height={"100%"}
          >
            Связаться с нами
          </Button>
          <Button
            background={"none"}
            border={"1px solid white"}
            borderRadius={"100px"}
            padding={"15px 20px"}
            height={"100%"}
          >
            Связаться с нами
          </Button>

          <Button
            background={"none"}
            border={"1px solid white"}
            borderRadius={"50%"}
            width="50px"
            height="50px"
          >
            <Image
              width="24px"
              height="24px"
              objectFit="contain"
              src={rocketSvg}
            />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
