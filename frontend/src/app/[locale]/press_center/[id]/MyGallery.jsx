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
  const photos = data?.photo_content?.data ?? [];
  const images =
    photos.map((item) => ({
      src: mediaUrl(item.attributes.url),
      width: item.attributes.width,
      height: item.attributes.height,
    }));

  return (
    <>
      {/* Галерея: одно фото — во всю ширину, несколько — сеткой */}
      {photos.length === 1 && (
        <button type="button" onClick={() => setIndex(0)} className="block cursor-zoom-in">
          <Image
            src={mediaUrl(photos[0].attributes.url)}
            width={photos[0].attributes.width}
            height={photos[0].attributes.height}
            className="w-full h-auto"
            alt=""
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </button>
      )}
      {photos.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {photos.map((item, idx) => (
            <button
              type="button"
              key={item.id || idx}
              onClick={() => setIndex(idx)}
              className="relative aspect-[4/3] overflow-hidden bg-secondary cursor-zoom-in group"
            >
              <Image
                src={mediaUrl(item.attributes.url)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                alt=""
                sizes="(min-width: 768px) 256px, 50vw"
              />
            </button>
          ))}
        </div>
      )}

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
              className="w-full aspect-video"
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
            <video key={item.id} controls className="w-full max-h-[80vh] bg-black">
              <source src={mediaUrl(item.attributes.url)} type={item.attributes.mime || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      )}
    </>
  );
};
