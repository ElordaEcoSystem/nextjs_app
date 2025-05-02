
'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { LocaleButton } from './LocaleButton';


export const Header = ({data,locale})=> {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // console.log("DATA",data)

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Закрывать при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border border-b border-zinc-100 sticky top-0 z-50 h-16">
      <div className="container mx-auto flex items-center justify-between h-full ">
        {/* Логотип */}
        <Link
          href="/"
          className="text-prime font-bold text-2xl flex flex-col justify-center"
        >
          <img
                  sizes="100vw"
                  src="/image/logo.png"
                  alt={"logo"}
                  width={0}
                  height={0}
                  className="h-[50px]  w-[68px] object-contain md:m-0 mx-auto block"
                />
        </Link>

        {/* Десктоп меню */}
        <nav className="hidden md:flex gap-4 h-full" ref={dropdownRef}>
          {data.map((item)=>{
            return (
              <NavButton toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} locale={locale} item={item}/>
            )
          } )}

        </nav>

        {/* Бургер меню кнопка */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden focus:outline-none ml-auto"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      <LocaleButton className=" my-auto lg:flex  w-14 lg:flex-col lg:justify-center lg:items-center" />

      </div>

       {/* Мобильное меню */}
      {openMenu && (
        <MobileMenu
          data={data}
          locale={locale}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
        />
      )}
    </header>
  );
}


const NavButton = ({ toggleDropdown, activeDropdown, locale, item }) => {
  if (item.sections) {
    return (
      <div className="relative justify-center flex flex-col h-full">
        <button
          onClick={() => toggleDropdown(item.title)}
          className="transition text-sm font-medium"
        >
          {item.title}
        </button>

        {activeDropdown === item.title && (
          <div className="absolute top-[63px] w-48 bg-white border border-prime shadow-md rounded">
            <div className="flex flex-col">
              {item.sections.map((section) => (
                <Link
                  href={`/${locale}/${section.link}`}
                  key={section.title}
                  className="p-2 text-sm hover:bg-gray-100 cursor-pointer transition rounded"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        href={`/${locale}/${item.link}`}
        key={item.title}
        className="h-full transition text-sm font-medium justify-center flex flex-col"
      >
        {item.title}
      </Link>
    );
  }
};


const MobileMenu = ({ data, locale, activeDropdown, toggleDropdown }) => {
  return (
    <div className="md:hidden bg-white border-t shadow-md w-full">
      <div className="p-4 space-y-4">
        {data.map((item) => (
          <div key={item.title}>
            {item.sections ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full text-left font-semibold py-2"
                >
                  {item.title}
                </button>
                {activeDropdown === item.title && (
                    item.sections.map((section) => (
                      <Link
                        href={`/${locale}/${section.link}`}
                        key={section.title}
                        className="block text-gray-700 py-1 hover:underline"
                      >
                        {section.title}
                      </Link>
                    ))
                )}
              </>
            ) : (
              <Link
                href={`/${locale}/${item.link}`}
                className="block w-full text-left font-semibold py-2"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// import Link from "next/link";
// // import Image from "next/image";

// import { useTranslations } from "next-intl";
// import { Navs } from "./Navs";

// export const Header = ({ data, locale }) => {
//   // console.log("LOCALE FROM HEADER", locale);
//   const t = useTranslations("header");
//   const header_data = [
//       {
//       title: t("home"),
//       link: "/",
//     },
//     {
//       title: t("about"),
//       link: "/about",
//     },
//     {
//       title: t("press_center"),
//       link: "/press_center",
//     },
//     {
//       title: t("compliance"),
//       link: "/compliance",
//     },
//     {
//       title: t("jobs"),
//       link: "/jobs",
//     },
//     {
//       title: t("procurement"),
//       link: "/procurement",
//     },
//     {
//       title: t("requestPTO"),
//       link: "/requestPTO",
//     },
//   ]
//   return (
//     // <div className="bg-prime w-screen h-[100vh] absolute opacity-50 ">

//     <div
//       id="menu"
//       className="border-b border-prime h-16 flex justify-center items-center bg-white  w-full fixed z-50 top-0"
//     >
//       <div className="container flex justify-between  h-full bg-white  gap-10 ">
//         <Link
//           href="/"
//           className="text-prime font-bold text-2xl flex flex-col justify-center"
//         >
//           {/* <Logo className="w-[70px] fill-prime" /> */}
//           <img
//                   sizes="100vw"
//                   src="/image/logo.png"
//                   alt={"logo"}
//                   width={0}
//                   height={0}
//                   className="h-[72px]  w-[72px] object-contain md:m-0 mx-auto block"
//                 />
//         </Link>

//         <Navs header_data={header_data} locale={locale}/>

//       </div>
//     </div>
//     // </div>
//   );
// };

