import service1 from "@/shared/assets/images/svg/courses/calendar-date.svg";
import service2 from "@/shared/assets/images/svg/courses/book-closed.svg";
import service3 from "@/shared/assets/images/svg/courses/certificate-01.svg";
import service4 from "@/shared/assets/images/svg/courses/coins-hand.svg";

import housImg from "@/shared/assets/images/png/firstCourse.jpg";
import officeImg from "@/shared/assets/images/png/office.jpg";
import barmanImg from "@/shared/assets/images/png/barman.jpg";
import baristaImg from "@/shared/assets/images/png/barista.jpg";
import cafeImg from "@/shared/assets/images/png/cafe.jpg";

export interface ICOURSE_CARDS {
  title: string;
  text: string;
  highlight: string;
  img: string;
  services: { icon: string; title: string; value: string }[];
}

export const COURSE_CARDS = [
  {
    id: 0,
    title: "Хаускипинг",
    text: `Курсы хаускипинга — профессия с востребованностью по всему миру!
    Научись профессиональной уборке, обслуживанию и международным стандартам сервиса.
    От безупречно заправленной постели до сверкающей ванной комнаты – каждая мелочь важна и создает общее впечатление`,
    highlight:
      "Курсы хаускипинга — профессия с востребованностью по всему миру!",
    img: housImg,
    services: [
      {
        icon: service1,
        title: "Длительность",
        value: "7 дней",
      },
      {
        icon: service2,
        title: "Вид обучения",
        value: "Теория/Практика",
      },
      {
        icon: service3,
        title: "Награды",
        value: "Сертификат",
      },
      {
        icon: service4,
        title: "Помощь в",
        value: "Трудоустройстве",
      },
    ],
  },
  {
    id: 1,
    title: "Ресепшен",
    text: `Курсы администратора ресепшн — лицо отеля, сердце сервиса и путь к профессиональной карьере в гостеприимстве.
    Освой профессию и открой двери в лучшие отели мира, международные сети и круизные лайнеры.
    Ресепшен – это не просто стойка регистрации, это первое, что видит гость, переступая порог отеля, и последнее, что он помнит, покидая отель.`,
    highlight:
      "Курсы администратора ресепшн — лицо отеля, сердце сервиса и путь к профессиональной карьере в гостеприимстве.",
    img: officeImg,
    services: [
      {
        icon: service1,
        title: "Длительность",
        value: "7 дней",
      },
      {
        icon: service2,
        title: "Вид обучения",
        value: "Теория/Практика",
      },
      {
        icon: service3,
        title: "Награды",
        value: "Сертификат",
      },
      {
        icon: service4,
        title: "Помощь в",
        value: "Трудоустройстве",
      },
    ],
  },
  {
    id: 2,
    title: "Бармен",
    text: `Овладей искусством бармена — начни зарабатывать с первой недели!
Научись готовить коктейли, работать за барной стойкой, через наш интенсивный курс и стань уверенным Барменом, которого ищут рестораны, бары и топовые заведения.
Практика, шоу и авторские техники — всё, что нужно знать, чтобы начать карьеру в барной индустрии.`,
    highlight:
      "Овладей искусством бармена — начни зарабатывать с первой недели!",
    img: barmanImg,
    services: [
      {
        icon: service1,
        title: "Длительность",
        value: "7 дней",
      },
      {
        icon: service2,
        title: "Вид обучения",
        value: "Теория/Практика",
      },
      {
        icon: service3,
        title: "Награды",
        value: "Сертификат",
      },
      {
        icon: service4,
        title: "Помощь в",
        value: "Трудоустройстве",
      },
    ],
  },
  {
    id: 3,
    title: "Бариста",
    text: `Начни зарабатывать на кофе и открой для себя профессию Бариста, которая вдохновляет.
Наши курсы Бариста – ваш ключ к миру ароматных напитков и увлекательной профессии!
Авторский курс от опытных тренеров с упором на практику.`,
    highlight:
      "Начни зарабатывать на кофе и открой для себя профессию Бариста, которая вдохновляет.",
    img: baristaImg,
    services: [
      {
        icon: service1,
        title: "Длительность",
        value: "7 дней",
      },
      {
        icon: service2,
        title: "Вид обучения",
        value: "Теория/Практика",
      },
      {
        icon: service3,
        title: "Награды",
        value: "Сертификат",
      },
      {
        icon: service4,
        title: "Помощь в",
        value: "Трудоустройстве",
      },
    ],
  },
  {
    id: 4,
    title: "Официант",
    text: `Профессия официанта — твой старт в мир высокого сервиса и стабильного дохода.
Официант — это не просто работа. Это лицо заведения, эксперт по сервису и мастер продаж.
Пройди наш интенсивный курс и стань востребованным специалистом, которого с радостью берут в лучшие рестораны и отели!`,
    highlight:
      "Профессия официанта — твой старт в мир высокого сервиса и стабильного дохода.",
    img: cafeImg,
    services: [
      {
        icon: service1,
        title: "Длительность",
        value: "7 дней",
      },
      {
        icon: service2,
        title: "Вид обучения",
        value: "Теория/Практика",
      },
      {
        icon: service3,
        title: "Награды",
        value: "Сертификат",
      },
      {
        icon: service4,
        title: "Помощь в",
        value: "Трудоустройстве",
      },
    ],
  },
];
