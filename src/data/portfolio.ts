import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

// ✏️ Ваше имя
export const DEVELOPER_NAME = "";

// ✏️ Контакты — замените ссылки на свои
export const CONTACTS = {
  telegram: "https://t.me/OreshTeacher",
  github: "https://t.me/OreshTeacher",
  email: "gennadijoresko@gmail.com",
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  url: string; // ✏️ ссылка на реальный сайт
};

// ✏️ Добавляйте новые проекты в этот массив.
// Сейчас здесь ДЕМО-карточки с временными изображениями и ссылками-заглушками.
export const PROJECTS: Project[] = [
  {
    title: "Демо: SaaS-дашборд",
    description: "Пример аналитической панели с графиками и тёмной темой.",
    image: p1,
    tech: ["React", "TypeScript", "Tailwind"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
  {
    title: "Демо: Fashion-магазин",
    description: "Пример минималистичного интернет-магазина одежды.",
    image: p2,
    tech: ["Next.js", "TypeScript", "SCSS"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
  {
    title: "Демо: Креативное агентство",
    description: "Пример лендинга с 3D-графикой и смелой типографикой.",
    image: p3,
    tech: ["React", "GSAP", "Tailwind"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
  {
    title: "Демо: Финтех-приложение",
    description: "Пример промо-страницы мобильного банка.",
    image: p4,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
  {
    title: "Демо: Кофейня",
    description: "Пример сайта ресторана с меню и бронированием.",
    image: p5,
    tech: ["HTML", "SCSS", "JavaScript"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
  {
    title: "Демо: Сервис путешествий",
    description: "Пример платформы бронирования туров с поиском.",
    image: p6,
    tech: ["Next.js", "React", "Tailwind"],
    url: "https://royaljack-casino-f3pl.vercel.app/",
  },
];

export const SKILLS = [
  "HTML5",
  "CSS3 / SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git / GitHub",
  "Responsive Design",
];

export const ADVANTAGES = [
  { title: "Чистый код", text: "Понятная структура и поддерживаемость." },
  { title: "Современный дизайн", text: "Интерфейсы уровня лучших продуктов." },
  { title: "Адаптивная вёрстка", text: "Идеально на любом экране." },
  { title: "Производительность", text: "Быстрая загрузка и плавность." },
  { title: "Внимание к деталям", text: "Каждый пиксель на своём месте." },
];
