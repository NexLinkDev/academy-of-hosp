import { useModal } from "@/shared/store/SignModal";
import SignModal from "@/shared/ui/SignModal/SignModal";
import AboutUs from "@/widgets/AboutUs/AboutUs";
import Courses from "@/widgets/Courses/Courses";
import Faq from "@/widgets/Faq/Faq";
import Footer from "@/widgets/Footer/Footer";
import Intro from "@/widgets/Intro/Intro";
import Message from "@/widgets/Message/Message";
import Partners from "@/widgets/Partners/Partners";
import Reviews from "@/widgets/Reviews/Reviews";
import Videos from "@/widgets/Videos/Videos";
import { Box } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";

const App = () => {
  // const { t } = useTranslation();
  const { isOpen } = useModal();

  return (
    <Box p={"30px 0"}>
      {isOpen && <SignModal />}
      <Intro />
      <AboutUs />
      <Partners />
      <Courses />
      <Message />
      <Videos />
      <Reviews />
      <Faq />
      <Footer />
    </Box>
  );
};

export default App;
