"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const MyMap = () => {
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
