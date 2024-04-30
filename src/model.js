import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = `Вчімо JavaScript. JavaScript - це круто. Разом до перемоги.`;

export const model = [
  new TitleBlock("Конструктор сайтів на чистому JavaScript.", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "centr",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "image",
  }),
  new ColumnsBlock(
    [
      "Додаток на чистому JavaScript, без використання бібліотек.",
      "Дізнаєшся як працює принцип SOLID и ООП в JavaScript за один курс.",
      "JavaScript - це просто та цікаво. Навчися створювати будь-які UI своїми руками.",
    ],

    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
