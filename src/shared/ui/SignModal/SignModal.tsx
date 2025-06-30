import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import DefaultInput from "../DefaultInput/DefaultInput";
import SignBtn from "../SignBtn/SignBtn";
import DefaultRadioBlock from "../DefaultRadioBlock/DefaultRadioBlock";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { useModal } from "@/shared/store/SignModal";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@chakra-ui/toast";

const schema = yup.object().shape({
  fullName: yup.string().required("Введите ФИО"),
  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^[\d+()\s-]+$/, "Некорректный номер"),
  email: yup.string().email("Некорректный email").required("Введите email"),
  topic: yup.string().required("Выберите тему"),
});

type FormData = yup.InferType<typeof schema>;

const SignModal = () => {
  const { onClose } = useModal();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const message = `
<b>Новая заявка</b>
👤 ФИО: ${data.fullName}
📞 Телефон: ${data.phone}
📧 Email: ${data.email}
📌 Тема: ${data.topic}
    `;

    const TELEGRAM_BOT_TOKEN = "твой_токен";
    const TELEGRAM_CHAT_IDS = ["203012183", "987654321"];

    try {
      await Promise.all(
        TELEGRAM_CHAT_IDS.map((chat_id) =>
          fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id,
                text: message,
                parse_mode: "HTML",
              }),
            }
          )
        )
      );

      toast({
        title: "Заявка отправлена",
        description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      onClose();
    } catch {
      toast({
        title: "Ошибка",
        description: "Попробуйте ещё раз!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Box>
      <Box
        position="fixed"
        bg="black"
        opacity={0.3}
        height="100vh"
        zIndex={1000}
        width="100%"
        top={0}
        left={0}
        onClick={onClose}
      />
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        position="fixed"
        top="50%"
        left="50%"
        translate="-50% -50%"
        bg="#F8F8F8"
        borderRadius="35px"
        zIndex={1001}
        p="30px"
        w={{ base: "90%", md: "700px" }}
      >
        <Heading
          textAlign="center"
          color="#040404"
          fontWeight={500}
          fontSize={{ base: "37px", md: "50px" }}
          lineHeight={{ base: "40px", md: "53px" }}
          mb="40px"
        >
          {HighlightText({
            text: "Оставьте вашу заявку",
            highlight: "Оставьте",
            color: "#969493",
          })}
        </Heading>
        <Flex direction="column" gap="16px">
          <Box>
            <FormLabel mb={"14px"}>ФИО</FormLabel>
            <DefaultInput
              placeholder="Ваше ФИО"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
          </Box>
          <Box>
            <FormLabel mb={"14px"}>Номер телефона</FormLabel>
            <DefaultInput
              placeholder="Ваш контактный номер телефона"
              {...register("phone")}
              error={errors.phone?.message}
            />
          </Box>
          <Box>
            <FormLabel mb={"14px"}>E-Mail</FormLabel>
            <DefaultInput
              placeholder="Ваш E-mail"
              {...register("email")}
              error={errors.email?.message}
            />
          </Box>
        </Flex>

        <Flex direction="column" mt="20px">
          <Text fontWeight={500} fontSize="18px" mb="10px">
            Выберите вашу тему
          </Text>
          <Controller
            name="topic"
            control={control}
            render={({ field }) => (
              <DefaultRadioBlock
                selected={field.value}
                setSelected={(val) => field.onChange(val)}
              />
            )}
          />
          {errors.topic && (
            <Text fontSize="14px" color="red.500" mt="8px">
              {errors.topic.message}
            </Text>
          )}

          <SignBtn
            mt="30px"
            bg="#9EE778"
            color="black"
            iconSize={24}
            type="submit"
          >
            Отправить заявку
          </SignBtn>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignModal;
