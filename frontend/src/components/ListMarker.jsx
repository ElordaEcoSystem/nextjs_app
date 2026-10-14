// Квадратный зелёный маркер списка. Выравнивается по центру первой строки
// текста с межстрочным интервалом 1.55 (стандарт сайта).
export const ListMarker = () => (
  <span
    aria-hidden="true"
    className="absolute left-0 top-[calc(0.775em-3px)] h-1.5 w-1.5 bg-leaf"
  />
);

// Строка, которую редактор начал с «•», «–», «-» или «—»
export const BULLET_PREFIX = /^\s*[•▪■◦·\-–—]\s+/;

// Строка, которую редактор начал с номера: «1. …» или «1) …»
export const NUMBER_PREFIX = /^\s*(\d{1,3})[.)]\s+/;
