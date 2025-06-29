import { Box, BoxProps, Flex, Image, Link } from "@chakra-ui/react";
import logoSvg from "@/shared/assets/images/svg/logo.svg";
import rocketSvg from "@/shared/assets/images/svg/rocket.svg";
import Container from "@/shared/ui/Container/Container";
import { FC } from "react";
import GradientBorderButton from "@/shared/ui/GradientBorder/GradientBorderButton";
import GradientText from "@/shared/ui/GradientText/GradientText";
import LanguageSwitcher from "@/features/LanguageSwitcher/LanguageSwitcher";

const Header: FC<BoxProps> = ({ ...props }) => {
  return (
    <Container>
      <Box {...props}>
        <Flex height={"50px"} align="center" justify="space-between">
          <Link>
            <Image
              width="252px"
              height="58px"
              objectFit="contain"
              src={logoSvg}
              alt="Logo"
            />
          </Link>

          <Flex height={"100%"}>
            <LanguageSwitcher />
            <GradientBorderButton
              borderGradient="primary"
              borderWidth="2px"
              background="white"
              height={"100%"}
            >
              <GradientText
                fontWeight={500}
                fontSize={"16px"}
                height={"100%"}
                gradient="linear-gradient(23.83deg, #C85EDC -106.12%, #8A8DD4 -11.52%, #4720D5 42.54%, #8C5EDB 147.65%)"
              >
                Связаться с нами
              </GradientText>
            </GradientBorderButton>

            <GradientBorderButton
              width="50px"
              height="50px"
              borderGradient="primary"
              borderWidth="2px"
              background="white"
              borderRadius={"50%"}
            >
              <Box
                position={"absolute"}
                top={"50%"}
                left={"50%"}
                translate={"-50% -50%"}
              >
                <Image
                  width="24px"
                  height="24px"
                  objectFit="contain"
                  src={rocketSvg}
                />
              </Box>
            </GradientBorderButton>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
