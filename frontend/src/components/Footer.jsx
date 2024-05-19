// "use client";

// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { PhoneIcon } from "./icons/PhoneIcon";
import { MailIcon } from "./icons/MailIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { TelegramIcon } from "./icons/TelegramIcon";
import { fetchFooter } from "@/app/[locale]/needed/services";

import { useLocale } from "next-intl";
import { MyMap } from "./Map";

export const Footer = async () => {
  const locale = useLocale();
  const Footer_info = await fetchFooter(locale);
  const Footer_data = await Footer_info.data[0].attributes;
  return (
    <>
      <div className="bg-prime py-10">
        <div className="container ">
          <div className="flex justify-center items-center gap-10">
            <MyMap />
            <div className="flex flex-col gap-7">
              <div>
                <div className="text-sm text-white font-medium">
                  {Footer_data.title_address}
                </div>
                <div className="text-white text-xs">{Footer_data.address}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <div className="text-white text-xs">{Footer_data.number}</div>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  <div className="text-white text-xs">{Footer_data.email}</div>
                </div>
              </div>

              <div className="">
                {/* <div className="text-white text-xs">
                  Написать обращение на сайте
                </div> */}
                <div className="text-white text-xs">
                  {Footer_data.link_eOtinish}
                </div>
              </div>

              <div>
                <div className="text-sm text-white font-medium">
                  {Footer_data.title_social}
                </div>
                <div className="flex gap-5">
                  <FacebookIcon className="w-5 h-5" />
                  <InstaIcon className="w-5 h-5" />
                  <TelegramIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-sm text-white text-center mt-6">
            ©2022 - Qala Digital.kz. Все права защищены
          </div> */}
        </div>
      </div>
    </>
  );
};
