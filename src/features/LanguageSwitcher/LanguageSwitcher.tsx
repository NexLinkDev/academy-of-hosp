import Select, { StylesConfig, SingleValue } from "react-select";
import globeSvg from "@/shared/assets/images/svg/globe.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Image } from "@chakra-ui/react";

interface IOptions {
  value: string;
  label: React.ReactNode;
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>(i18n.language);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const langFromStorage = localStorage.getItem("lang");
    if (langFromStorage) {
      setCurrentLang(langFromStorage);
      i18n.changeLanguage(langFromStorage);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsScrolled(scrollPosition > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (selectedOption: SingleValue<IOptions>) => {
    if (selectedOption) {
      localStorage.setItem("lang", selectedOption.value);
      setCurrentLang(selectedOption.value);
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const customStyles: StylesConfig<IOptions, false> = {
    indicatorSeparator: () => ({ display: "none" }),
    control: (provided) => ({
      ...provided,
      width: "106px",
      height: "50px",
      cursor: "pointer",
      background:
        "linear-gradient(13.83deg, #E5FFD8 -99.78%, #37A200 -27.65%, #8CE55E 13.56%, #37A200 93.7%)",
      border: "2px solid rgba(140, 229, 94, 0.8)",
      borderRadius: "100px",
      "&:hover": {
        border: "2px solid rgba(140, 359, 94, 0.8)",
      },
      boxShadow: "none",
    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: isScrolled ? "black" : "white",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        border: "none",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontWeight: 800,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: isScrolled ? "black" : "white",
      "&:hover": { color: "#d8dfeb" },
    }),
    menu: (provided) => ({
      ...provided,
      background:
        "linear-gradient(13.83deg, #E5FFD8 -99.78%, #37A200 -27.65%, #8CE55E 13.56%, #37A200 93.7%)",
      borderRadius: "16px",
      fontWeight: 800,
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "16px",
      padding: 0,
    }),
  };

  const options: IOptions[] = [
    {
      value: "ru",
      label: (
        <Flex alignItems="center" gap="8px">
          <Image src={globeSvg} alt="" />
          <p>РУ</p>
        </Flex>
      ),
    },
    {
      value: "en",
      label: (
        <Flex alignItems="center" gap="8px">
          <Image src={globeSvg} alt="" />
          <p>EN</p>
        </Flex>
      ),
    },
    {
      value: "kg",
      label: (
        <Flex alignItems="center" gap="8px">
          <Image src={globeSvg} alt="" />
          <p>KG</p>
        </Flex>
      ),
    },
  ];

  return (
    <Box height="100%">
      <Select<IOptions, false>
        options={options}
        styles={customStyles}
        value={options.find((option) => option.value === currentLang)}
        isSearchable={false}
        onChange={handleLanguageChange}
      />
    </Box>
  );
}

export default LanguageSwitcher;
