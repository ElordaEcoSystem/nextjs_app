"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";
import NextJsImage from "./NextJsImage";
import { mediaUrl } from "../../needed/services";

export const MyGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

  // Создаем массив изображений для лайтбокса
  const images =
    data?.photo_content?.data?.map((item) => ({
      src: mediaUrl(item.attributes.url),
      width: item.attributes.width,
      height: item.attributes.height,
    })) || [];

  return (
    <>
      {/* Галерея изображений */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.photo_content?.data?.map((item, idx) => (
          <Image
            key={item.id || idx}
            onClick={() => setIndex(idx)}
            src={mediaUrl(item.attributes.url)}
            width={item.attributes.width}
            height={item.attributes.height}
            className="h-full object-cover cursor-pointer"
            alt=""
            sizes="(min-width: 728px) 33vw, (min-width: 600px) 50vw, 100vw"
          />
        ))}
      </div>

      {/* Лайтбокс */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        render={{ slide: NextJsImage }}
      />

      {/* Видео YouTube */}
      {data?.youtube_link?.length > 0 && (
        <div className="flex flex-col gap-4">
          {data.youtube_link.map((item, idx) => (
            <iframe
              key={idx}
              width="560"
              height="500"
              className="w-full"
              src={item.src}
              title={`YouTube video ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      )}

      {/* Локальные видео */}
      {data?.video_content?.data?.length > 0 && (
        <div className="flex flex-col gap-4">
          {data.video_content.data.map((item) => (
            <video key={item.id} height="600" controls>
              <source src={mediaUrl(item.attributes.url)} type={item.attributes.mime || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      )}
    </>
  );
};
