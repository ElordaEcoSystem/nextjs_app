'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, ChevronDown } from 'lucide-react';
import { LocaleButton } from './LocaleButton';

export const Header = ({ data }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenSections({});
  };

  return (
    <header className="bg-white border-b border-secondary fixed w-full z-50">
      <div className='relative container'>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-prime font-medium text-2xl flex flex-col justify-center"
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

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex  h-full font-medium">
              {data.map((item) =>
                item.sections ? (
                  <div
                    key={item.title}
                    className="relative h-full"
                    onMouseEnter={() => setHoveredMenu(item.title)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <button className="h-full inline-flex items-center text-gray-700 hover:bg-secondary px-2 ">
                      {item.title}
                      {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                    </button>

                    {hoveredMenu === item.title && (
                      <div className="absolute left-0 w-48 bg-white border border-gray-200  z-20">
                        {item.sections.map((section) => (
                          <Link
                            key={section.title}
                            href={section.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary font-normal"
                          >
                            {section.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                <Link
                    key={item.title}
                    href={item.link}
                    className="text-gray-700 px-2 hover:bg-secondary  h-full flex items-center"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
            <LocaleButton className=" h-full  flex  flex-col w-14  items-center text-sm font-medium justify-center lg:ml-0 ml-auto " />
            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {mobileOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="inset-0 bg-white z-40 top-16 font-normal lg:hidden block">
            <div className="px-2 py-3 gap-1">
              {data.map((item) =>
                item.sections ? (
                  <div key={item.title}>
                    <button
                      onClick={() => toggleSection(item.title)}
                      className="w-full flex justify-between items-center px-3 py-2  text-gray-700 hover:text-blue-600 focus:outline-none"
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${
                          openSections[item.title] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSections[item.title] && (
                      <div className="pl-4">
                        {item.sections.map((section) => (
                          <Link
                            key={section.title}
                            href={section.link}
                            onClick={closeMobileMenu}
                            className="block pl-2 pr-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {section.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
