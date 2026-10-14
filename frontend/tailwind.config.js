/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Типографическая шкала сайта: размер, межстрочный интервал и трекинг.
      // Заголовки — плотные (1.1–1.3) с лёгким отрицательным трекингом,
      // основной текст — 1.55, вводный — 1.45.
      fontSize: {
        display: ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 36/40 — первый экран
        'display-sm': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // 28/32
        h1: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // 32/37 — заголовок страницы
        'h1-sm': ['1.625rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }], // 26/31
        h2: ['1.625rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }], // 26/31 — заголовок секции
        'h2-sm': ['1.375rem', { lineHeight: '1.25' }], // 22/27
        h3: ['1.1875rem', { lineHeight: '1.3' }], // 19/25 — подзаголовок, карточка
        h4: ['1.0625rem', { lineHeight: '1.35' }], // 17/23 — мелкая карточка
        lead: ['1.0625rem', { lineHeight: '1.5' }], // 17/25.5 — вводный текст
        body: ['1rem', { lineHeight: '1.55' }], // 16/25 — основной текст
        caption: ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.06em' }], // 12 — даты, метки
      },
      boxShadow: {
        main: '35px 19px 49px -30px rgba(0, 42, 81, 0.03)',
      },
      colors: {
        prime: '#002137',
        secondary: '#E6EAEE',
        def_black: '#191919',
        // Цвета логотипа. leaf и sky — для декоративных акцентов,
        // accent — голубой с достаточным контрастом для текста и ссылок
        leaf: '#00a800',
        sky: '#0090c8',
        accent: '#0077a8',
        muted: '#5f6b76',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1076px',
        '2xl': '1076px',
      },
    },
  },
  plugins: [],
};
