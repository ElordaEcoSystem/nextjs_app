import { PERFORM_YEAR_BUTTONS } from "@/app/[locale]/needed/constans";

export const PerformYears = ({ activeYear, setActiveYear }) => {
  return PERFORM_YEAR_BUTTONS.map((year) => (
    <button
      key={year}
      className={`py-1 md:px-7 px-4 rounded-sm text-base ${
        activeYear === year
          ? " bg-prime text-white"
          : " bg-white border border-secondary text-base-color hover:scale-105 transition-all"
      }`}
      onClick={() => setActiveYear(year)}
    >
      {year}
    </button>
  ));
};
