// import { useTranslations } from "next-intl";

// export const Navs = async () => {
//   const t = useTranslations();

//   return (
//     <div>
//       {t("cds")}
//     </div>
//   );
// };


"use client";
import clsx from "clsx";
import { LocaleButton } from "./LocaleButton";
import { useState } from "react";
import Link from "next/link";


export const Navs = ({header_data,locale}) => {
  const [menuOpen, setManuOpen] = useState(false);
  console.log("header_data", header_data);

  return (
    <div className="flex">
      <nav
    className={clsx(
      "lg:flex lg:mt-0 lg:h-full lg:bg-white lg:static transition-all",
      "mt-16 absolute left-0", //w-screen justify-between first-letter  mt-16 left-0
      menuOpen ? " flex" : " hidden"
    )}
  >
    {/*w-screen justify-between first-letter flex absolute mt-16 left-0*/}
    <ul
      className={clsx(
        "md:flex  text-prime md:justify-between md:gap-1 font-semibold md:text-base md:items-center md:w-full  bg-white  " //w-screen
      )}
    >
      {/* w-screen bg-white */}
      {/* flex flex-col absolute  text-prime justify-between gap-4 font-semibold text-base items-center */}
      {/* {data?.data.map((item) => (
        <Link
          href={`/${locale}/${item.attributes.link}`}
          key={item.attributes.title}
          onClick={() => {
            setManuOpen(!menuOpen);
          }}
          className={clsx(
            "text-center text-sm  hover:bg-secondary transition-all md:h-full h-10 justify-center px-1",
            "flex flex-col bg-white md:w-auto ",
            "w-screen h-10"
          )}
          // className={clsx(
          //   menuOpen
          //     ? "w-full text-center block bg-white border-prime active:bg-secondary transition-all text-sm active:text-[13.5px] text-prime py-1"
          //     : "text-center hover:bg-secondary transition-all h-full text-sm justify-center flex flex-col active:text-[13.5px] w-full"
          // )} //
        >
          {item.attributes.title}
        </Link>
      ))} */}

      {/* test */}
      {header_data.map((item) => (
        // <div>
        //   {item.title}
        // </div>
        <Link
          href={`/${locale}/${item.link}`}
          key={item.title}
          onClick={() => {
            setManuOpen(!menuOpen);
          }}
          className={clsx(
            "text-center text-sm  hover:bg-secondary transition-all md:h-full h-10 justify-center px-1",
            "flex flex-col bg-white md:w-auto ",
            "w-screen h-10"
          )}
        >
          {item.title}
        </Link>
      ))}
    </ul>
  </nav>
  <LocaleButton className="ml-auto md:ml-0 md:flex w-14 md:flex-col md:justify-center md:items-center " />
  <button
    className="block lg:hidden"
    onClick={() => {
      setManuOpen(!menuOpen);
    }}
  >
    {/* <MailIcon className="fill-prime " /> */}
    <div
      id="js-hamburger"
      className="relative block cursor-pointer text-xs w-[2.83em] h-[2.167em]"
    >
      <span
        className={clsx(
          "absolute block bg-prime h-[.5em] w-full float-left m-0 transition-all top-0 rounded-sm ",
          menuOpen
            ? "origin-[.167em_.33em] rotate-45 translate-x-[0.167em] translate-y-[-.25em]"
            : ""
        )}
      ></span>
      <span
        className={clsx(
          "absolute block bg-prime h-[.5em] w-full float-left m-0 transition-all top-1/2  mt-[-.25em] rounded-sm",
          menuOpen ? "opacity-0" : ""
        )}
      ></span>
      <span
        className={clsx(
          "absolute block bg-prime h-[.5em] w-full float-left m-0 transition-all bottom-0 rounded-sm origin-[.25em_-0.33em]",
          menuOpen ? "translate-x-[-0.23em]  rotate-[-45deg]" : ""
        )}
      ></span>
    </div>
  </button>
    </div>
  );
};
