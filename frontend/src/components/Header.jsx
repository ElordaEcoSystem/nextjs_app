"use client";
import Link from "next/link";
import { Logo } from "./icons/Logo";
import { LocaleButton } from "./LocaleButton";
import { MailIcon } from "./icons/MailIcon";
import { useState } from "react";
import clsx from "clsx";
//
export const Header = ({ data, locale }) => {
  // console.log("LOCALE FROM HEADER", locale);

  const [menuOpen, setManuOpen] = useState(false);
  return (
    // <div className="bg-prime w-screen h-[100vh] absolute opacity-50 ">
    <div
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center bg-white  w-full fixed z-50 top-0"
    >
      <div className="container flex justify-between  h-full bg-white  gap-2 ">
        <Link
          href="/"
          className="text-prime font-bold text-2xl flex flex-col justify-center"
        >
          <Logo className="w-[70px] fill-prime" />
        </Link>
        <nav
          className={clsx(
            "md:flex md:mt-0 md:h-full md:bg-white md:static transition-all",
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
            {data?.data.map((item) => (
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
            ))}
          </ul>
        </nav>
        <LocaleButton className="ml-auto md:ml-0 md:flex w-14 md:flex-col md:justify-center md:items-center " />
        <button
          className="block md:hidden"
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
    </div>
    // </div>
  );
};
