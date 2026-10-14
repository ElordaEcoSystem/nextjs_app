import clsx from "clsx";

// Заголовок страницы с фирменной зелёной полоской
export const PageTitle = ({ children, className }) => {
  if (!children) return null;
  return (
    <div className={clsx("mb-8", className)}>
      <h1 className="text-h1-sm md:text-h1 font-bold text-prime">
        {children}
      </h1>
      <span aria-hidden="true" className="block w-12 h-1 bg-leaf mt-4" />
    </div>
  );
};
