import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GradientBorderBoxProps extends BoxProps {
  children: ReactNode;
  borderWidth?: string;
  borderRadius?: string;
  gradient?: string;
}

const GradientBorderButton: React.FC<GradientBorderBoxProps> = ({
  children,
  borderWidth = "4px",
  borderRadius = "md",
  gradient,
  ...props
}) => {
  return (
    <Box
      position="relative"
      borderRadius={borderRadius}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: borderRadius,
        padding: borderWidth,
        background: gradient,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
        zIndex: 0,
      }}
      {...props}
    >
      <Box
        position="relative"
        zIndex={1}
        borderRadius={borderRadius}
        bg="white"
      >
        {children}
      </Box>
    </Box>
  );
};

export default GradientBorderButton;
