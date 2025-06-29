import { Box, Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

type GradientBorderColor = keyof typeof gradientSources;

const gradientSources = {
  primary: "linear-gradient(to left, #743ad5, #d53a9d)",
  secondary: "linear-gradient(to left, #00C853, #B2FF59)",
};

interface GradientBorderButtonProps extends ButtonProps {
  borderGradient?: GradientBorderColor;
  background: string;
  borderWidth: string;
}

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({
  children,
  borderGradient = "primary",
  borderWidth,
  background,
  ...props
}) => {
  return (
    <Button
      position="relative"
      borderRadius="100px"
      p="10px 20px"
      bg={gradientSources[borderGradient]}
      color="black"
      overflow="hidden"
      zIndex={1}
      {...props}
      _before={{
        content: '""',
        position: "absolute",
        top: borderWidth,
        bottom: borderWidth,
        left: borderWidth,
        right: borderWidth,
        background: background,
        borderRadius: "inherit",
        zIndex: 0,
      }}
    >
      <Box zIndex={2}>{children}</Box>
    </Button>
  );
};

export default GradientBorderButton;
