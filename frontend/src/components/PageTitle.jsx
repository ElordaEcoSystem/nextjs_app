import clsx from "clsx";

// Заголовок страницы с фирменной зелёной полоской
export const PageTitle = ({ children, className }) => {
  if (!children) return null;
  return (
    <div className={clsx("mb-6", className)}>
      <h1 className="text-3xl md:text-4xl font-bold text-prime leading-tight">
        {children}
      </h1>
      <span aria-hidden="true" className="block w-12 h-1 bg-leaf mt-3 rounded-full" />
    </div>
  );
};
