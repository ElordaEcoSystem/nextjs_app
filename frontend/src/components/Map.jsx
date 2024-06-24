"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import clsx from "clsx";

export const MyMap = ({ className }) => {
  return (
    <YMaps>
      <Map
        className={clsx("max-w-xl w-full h-80", className)} //h-80 w-[600px]
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
            balloonContentBody: "Elorda Eco System",
          }}
          defaultGeometry={[51.181868, 71.477778]}
        />
      </Map>
    </YMaps>
  );
};
