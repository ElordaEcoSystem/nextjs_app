import { PERFORM_YEAR_BUTTONS } from "@/app/[locale]/needed/constans";

export const PerformYears = ({ activeYear, setActiveYear }) => {
  return PERFORM_YEAR_BUTTONS.map((year) => (
    <button
      key={year}
      className={`py-1 px-7 rounded-sm ${
        activeYear === year
          ? "text-lg bg-prime text-white"
          : " text-lg bg-gray-300 text-base-color hover:scale-105 transition-all"
      }`}
      onClick={() => setActiveYear(year)}
    >
      {year}
    </button>
  ));
};
