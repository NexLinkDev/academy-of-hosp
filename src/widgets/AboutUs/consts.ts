import infoSvg from "@/shared/assets/images/svg/info-circle.svg";
import magicSvg from "@/shared/assets/images/svg/magic-wand-01.svg";
import faceSvg from "@/shared/assets/images/svg/face-happy.svg";

export interface IABOUT_CARDS {
  icon: string;
  title: string;
  text: string;
  highlight: string;
  list: { title: string; text: string }[] | null;
}

export const ABOUT_CARDS = [
  {
    icon: infoSvg,
    title: "Кто мы?",
    text: "Мы — команда опытных преподавателей и экспертов, прошедших путь от линейных сотрудников до управляющих в лучших отелях и ресторанах мира. Мы объединяем международный опыт, практические знания и свежие тренды, чтобы дать студентам только то, что действительно работает в индустрии гостеприимства. Наши программы — это не теория, а проверенная практика, адаптированная под реальные задачи.",
    highlight: "Мы — команда опытных преподавателей и экспертов",
    list: null,
  },
  {
    icon: magicSvg,
    title: "Зачем?",
    text: "Мы создали Academy of Hospitality and Management, чтобы закрыть потребность в практическом и эффективном обучении в сфере HoReCa. Наша цель — формировать поколение специалистов, способных не просто выполнять стандарты, а задавать их. Мы верим: успех — это сочетание знаний, клиентоориентированности и лидерства.",
    highlight:
      "потребность в практическом и эффективном обучении в сфере HoReCa. ",
    list: null,
  },
  {
    icon: faceSvg,
    title: "Какой у нас подход?",
    text: "",
    highlight: "",
    list: [
      {
        title: "Погружение в Практику:",
        text: "Вы учитесь через реальные кейсы, ролевые игры и симуляции. Знания сразу превращаются в действия и результат.",
      },
      {
        title: "Гибкость и Индивидуальность:",
        text: "Курсы адаптируются под ваш уровень и цели — будь вы новичок или руководитель. Также есть корпоративные программы.",
      },
      {
        title: "Измеримый Результат: ",
        text: "Экспресс-курсы (1–4 недели) дают практические навыки и заметные изменения: повышение сервиса, удовлетворённости гостей и рост прибыли.",
      },
    ],
  },
];
