import { Input } from "@chakra-ui/react";

const DefaultInput = ({ ...props }) => {
  return (
    <Input
      border="1px solid rgba(77, 77, 77, 0.1)"
      bg="white"
      p="21px 24px"
      color="#181818"
      height={"54px"}
      fontSize="18px"
      fontWeight={500}
      borderRadius="16px"
      {...props}
    ></Input>
  );
};

export default DefaultInput;
