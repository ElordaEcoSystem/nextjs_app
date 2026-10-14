// Единые стили кнопок сайта. Фиксированная высота и рамка у всех вариантов,
// чтобы залитые и контурные кнопки были одного размера. pt-px — оптическая
// поправка: у Roboto текст визуально стоит чуть выше центра строки.
const base =
  "inline-flex items-center justify-center gap-2 px-6 text-sm font-semibold leading-none pt-px border-2 transition-colors whitespace-nowrap";

export const BUTTON = {
  primary: `${base} h-12 bg-prime border-prime text-white hover:bg-accent hover:border-accent`,
  outline: `${base} h-12 border-prime text-prime hover:bg-prime hover:text-white`,
  light: `${base} h-12 bg-white border-white text-prime hover:bg-secondary hover:border-secondary`,
  outlineLight: `${base} h-11 border-white/40 text-white hover:bg-white hover:text-prime hover:border-white`,
};
