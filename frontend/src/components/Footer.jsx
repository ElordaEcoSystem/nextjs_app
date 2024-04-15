"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { PhoneIcon } from "./icons/PhoneIcon";
import { MailIcon } from "./icons/MailIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { TelegramIcon } from "./icons/TelegramIcon";

const infoArr = [
  {
    icon: PhoneIcon,
    text: "+7 7172 918453",
  },
  {
    icon: MailIcon,
    text: "elordaecosystem@mail.ru",
  },
];

const InfoItem = ({ text, children }) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      <div className="text-white text-xs">{text}</div>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <div className="bg-prime py-10">
        <div className="container ">
          <div className="flex justify-center items-center gap-10">
            <MyMap />
            <div className="flex flex-col gap-7">
              <div>
                <div className="text-sm text-white font-medium">
                  Юридический адрес предприятия:
                </div>
                <div className="text-white text-xs">
                  Республика Казахстан, г. Астана, ул. Жетиген, 24
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {infoArr.map((item) => {
                  return (
                    <InfoItem key={item.icon} text={item.text}>
                      <item.icon className="h-5 w-5" />
                    </InfoItem>
                  );
                })}
              </div>

              <div className="">
                <div className="text-white text-xs">
                  Написать обращение на сайте
                </div>
                <div className="text-white text-xs">
                  Написать обращение на портале eOtinish
                </div>
              </div>

              <div>
                <div className="text-sm text-white font-medium">Мы есть </div>
                <div className="flex gap-5">
                  <FacebookIcon className="w-5 h-5" />
                  <InstaIcon className="w-5 h-5" />
                  <TelegramIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-white text-center mt-6">
            ©2022 - Qala Digital.kz. Все права защищены
          </div>
        </div>
      </div>
    </>
  );
};

const MyMap = () => {
  return (
    <YMaps>
      <Map
        className="h-80 w-[600px]"
        defaultState={{
          center: [51.128201, 71.430429],
          zoom: 10.4,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          properties={{
            balloonContentBody:
              "This is balloon loaded by the Yandex.Maps API module system",
          }}
          defaultGeometry={[51.181868, 71.477778]}
        />
      </Map>
    </YMaps>
  );
};
