// Единые стили кнопок сайта. Рамка есть у всех вариантов, чтобы залитые
// и контурные кнопки были одного размера.
const base =
  "inline-flex items-center justify-center gap-2 px-6 text-sm font-semibold border-2 transition-colors";
// Кнопка в одну строку фиксированной высоты. pt-px — оптическая поправка:
// у Roboto текст визуально стоит чуть выше центра строки.
const single = "leading-none pt-px whitespace-nowrap";

export const BUTTON = {
  primary: `${base} ${single} h-12 bg-prime border-prime text-white hover:bg-accent hover:border-accent`,
  outline: `${base} ${single} h-12 border-prime text-prime hover:bg-prime hover:text-white`,
  light: `${base} ${single} h-12 bg-white border-white text-prime hover:bg-secondary hover:border-secondary`,
  // Контурная светлая кнопка, текст которой может переноситься на несколько строк
  outlineLightWrap: `${base} leading-snug text-left pt-[13px] pb-[11px] border-white/40 text-white hover:bg-white hover:text-prime hover:border-white`,
};
