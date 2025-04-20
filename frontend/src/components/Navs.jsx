"use client";
import clsx from "clsx";
import { LocaleButton } from "./LocaleButton";
import { useState } from "react";
import Link from "next/link";


export const Navs = ({header_data,locale}) => {
  const [menuOpen, setManuOpen] = useState(false);
  console.log("header_data", header_data);

  return (
    <div className="flex w-full justify-end lg:justify-around">
      <nav
    className={clsx(
      "lg:flex lg:mt-0 lg:h-full lg:bg-white lg:static transition-all",
      "mt-16 absolute left-0",
      menuOpen ? " flex" : " hidden"
    )}
  >

    <ul
      className={clsx(
        "lg:flex  text-prime lg:justify-between lg:gap-1 font-semibold lg:text-base lg:items-center lg:w-full  bg-white gap-2 "
      )}
    >

      {header_data.map((item) => (

        <Link
          href={`/${locale}/${item.link}`}
          key={item.title}
          onClick={() => {
            setManuOpen(!menuOpen);
          }}
          className={clsx(
            "text-center text-sm  hover:bg-secondary transition-all lg:h-full h-10 justify-center px-1",
            "flex flex-col bg-white lg:w-auto ",
            "w-screen h-10"
          )}
        >
          {item.title}
        </Link>
      ))}
    </ul>
  </nav>
  <LocaleButton className="ml-auto lg:ml-0 lg:flex w-14 lg:flex-col lg:justify-center lg:items-center content-end" />
  <button
    className="block lg:hidden"
    onClick={() => {
      setManuOpen(!menuOpen);
    }}
  >

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
