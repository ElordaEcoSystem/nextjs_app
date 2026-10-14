'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MenuIcon, XIcon, ChevronDown, Phone } from 'lucide-react';
import { LocaleButton } from './LocaleButton';
import { PHONES } from '@/app/[locale]/needed/contacts';

const trimSlash = (path) => (path.length > 1 ? path.replace(/\/$/, '') : path);

export const Header = ({ data, locale, labels }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const pathname = trimSlash(usePathname() || '');

  // Главная активна только на своём адресе, остальные разделы — и на вложенных страницах
  const isActive = (link) => {
    const target = trimSlash(link);
    return target === `/${locale}` ? pathname === target : pathname.startsWith(target);
  };
  const isSectionActive = (item) =>
    item.sections ? item.sections.some((section) => isActive(section.link)) : isActive(item.link);

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

  const desktopItemClass = (active) =>
    clsx(
      'h-full inline-flex items-center px-3 border-b-2 transition-colors',
      active
        ? 'border-leaf text-prime'
        : 'border-transparent text-gray-700 hover:text-prime hover:bg-secondary'
    );

  return (
    <header className="bg-white/95 backdrop-blur border-b border-secondary fixed w-full z-50">
      <div className='relative container'>
        <div className="flex items-center h-16 gap-4">
          <Link
            href={`/${locale}`}
            className="flex flex-col justify-center shrink-0"
          >
            <Image
              src="/image/logo.png"
              alt="Elorda Eco System"
              width={68}
              height={50}
              priority
              className="h-[50px] w-[68px] object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex h-full font-medium text-[15px] mx-auto">
            {data.map((item) =>
              item.sections ? (
                <div key={item.title} className="relative h-full group">
                  <button
                    aria-haspopup="true"
                    className={clsx(desktopItemClass(isSectionActive(item)), 'gap-1')}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Меню открывается при наведении и при фокусе с клавиатуры */}
                  <div className="hidden group-hover:block group-focus-within:block absolute left-0 min-w-[14rem] bg-white border border-secondary shadow-lg z-20 py-1">
                    {item.sections.map((section) => (
                      <Link
                        key={section.title}
                        href={section.link}
                        onClick={(e) => e.currentTarget.blur()}
                        aria-current={isActive(section.link) ? 'page' : undefined}
                        className={clsx(
                          'block px-4 py-2 text-sm font-normal hover:bg-secondary',
                          isActive(section.link) ? 'text-accent font-medium' : 'text-gray-700'
                        )}
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.link}
                  aria-current={isActive(item.link) ? 'page' : undefined}
                  className={desktopItemClass(isActive(item.link))}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center h-full ml-auto lg:ml-0 gap-1">
            <a
              href={`tel:${PHONES.dispatch.tel}`}
              className="hidden xl:flex items-center gap-2 rounded bg-prime text-white px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] opacity-80">{labels.dispatchShort}</span>
                <span className="font-semibold whitespace-nowrap">{PHONES.dispatch.display}</span>
              </span>
            </a>
            <a
              href={`tel:${PHONES.dispatch.tel}`}
              aria-label={`${labels.dispatchShort} ${PHONES.dispatch.display}`}
              className="xl:hidden flex items-center justify-center h-10 w-10 rounded-full bg-prime text-white hover:bg-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <LocaleButton className="h-full flex flex-col w-14 items-center justify-center text-sm font-medium" />
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden text-gray-700 h-full px-2"
            >
              {mobileOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav className="bg-white lg:hidden block border-t border-secondary max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-3">
              {data.map((item) =>
                item.sections ? (
                  <div key={item.title}>
                    <button
                      onClick={() => toggleSection(item.title)}
                      aria-expanded={!!openSections[item.title]}
                      className={clsx(
                        'w-full flex justify-between items-center px-3 py-3 text-base',
                        isSectionActive(item) ? 'text-prime font-medium' : 'text-gray-700'
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${
                          openSections[item.title] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSections[item.title] && (
                      <div className="pl-4 border-l-2 border-leaf ml-3 mb-2">
                        {item.sections.map((section) => (
                          <Link
                            key={section.title}
                            href={section.link}
                            onClick={closeMobileMenu}
                            className={clsx(
                              'block px-3 py-2 text-sm hover:bg-secondary',
                              isActive(section.link) ? 'text-accent font-medium' : 'text-gray-600'
                            )}
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
                    className={clsx(
                      'block px-3 py-3 text-base hover:bg-secondary',
                      isActive(item.link) ? 'text-prime font-medium' : 'text-gray-700'
                    )}
                  >
                    {item.title}
                  </Link>
                )
              )}
              <a
                href={`tel:${PHONES.dispatch.tel}`}
                className="mx-3 mt-3 flex items-center gap-3 rounded bg-prime text-white px-4 py-3"
              >
                <Phone className="h-5 w-5" />
                <span className="flex flex-col leading-tight">
                  <span className="text-xs opacity-80">{labels.dispatchShort}</span>
                  <span className="font-semibold">{PHONES.dispatch.display}</span>
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
