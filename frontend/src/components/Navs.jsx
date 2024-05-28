"use strict";
import Link from "next/link";

export const Navs = ({ data, locale }) => {
  return (
    <nav className="flex w-max justify-between">
      <ul className="flex  text-prime justify-between gap-4 font-semibold text-base items-center ">
        {data?.data.map((item) => (
          <Link
            href={`/${locale}/${item.attributes.link}`}
            key={item.attributes.title}
            className="text-center hover:bg-secondary transition-all h-full text-sm justify-center flex flex-col active:text-[13.5px]"
          >
            {item.attributes.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
