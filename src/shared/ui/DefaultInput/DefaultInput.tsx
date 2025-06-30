import { Box, Input, Text, InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface DefaultInputProps extends InputProps {
  error?: string;
}

const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <Box>
        <Input
          ref={ref}
          border="1px solid rgba(77, 77, 77, 0.1)"
          bg="white"
          p="21px 24px"
          color="#181818"
          height="54px"
          fontSize="18px"
          fontWeight={500}
          borderRadius="16px"
          _focus={{ borderColor: error ? "red.500" : "black" }}
          borderColor={error ? "red.500" : "rgba(77, 77, 77, 0.1)"}
          {...props}
        />
        {error && (
          <Text color="red.500" fontSize="14px" mt="6px">
            {error}
          </Text>
        )}
      </Box>
    );
  }
);

export default DefaultInput;
