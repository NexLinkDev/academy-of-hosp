import DefaultInput from "@/shared/ui/DefaultInput/DefaultInput";
import DefaultRadioBlock from "@/shared/ui/DefaultRadioBlock/DefaultRadioBlock";
import SignBtn from "@/shared/ui/SignBtn/SignBtn";
import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Text } from "@chakra-ui/react";
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

const FooterForm = () => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const message = `
<b>Новая заявка</b>
👤 ФИО: ${data.fullName}
📞 Телефон: ${data.phone}
📧 Email: ${data.topic}
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
    <form>
      <Flex gap="40px" mb="100px" direction={{ base: "column", lg: "row" }}>
        {/* Левая часть */}
        <Flex flex="0 0 50%" direction={"column"} gap={"16px"}>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              ФИО
            </FormLabel>
            <DefaultInput
              placeholder="Ваше ФИО"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
          </Box>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              Номер телефона
            </FormLabel>
            <DefaultInput
              placeholder="Ваш контактный номер телефона"
              {...register("phone")}
              error={errors.phone?.message}
            />
          </Box>
          <Box>
            <FormLabel fontSize="16px" fontWeight={500} mb="14px">
              E-Mail
            </FormLabel>
            <DefaultInput
              placeholder="Ваш E-mail"
              {...register("email")}
              error={errors.email?.message}
            />
          </Box>
        </Flex>

        {/* Правая часть */}
        <Flex direction={"column"}>
          <Text fontWeight={500} fontSize="18px" mb={"20px"}>
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
            mt={{ base: "15px", lg: "40px" }}
            bg="#9EE778"
            color="black"
            iconSize={24}
            type="button"
            handleSubmit={handleSubmit(onSubmit)}
          >
            Отправить заявку
          </SignBtn>
        </Flex>
      </Flex>
    </form>
  );
};

export default FooterForm;
