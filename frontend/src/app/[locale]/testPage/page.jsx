"use client";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { space } from "postcss/lib/list";

const media = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
export default () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ type: "fraction" }}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="h-96 w-full text-purple-700"
      >
        {media.map((item) => {
          return (
            <SwiperSlide>
              <Image
                src={`/image/cloudImages/${item}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full object-cover justify-center"
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="h-28 "
      >
        {media.map((item) => {
          return (
            <SwiperSlide className="">
              <Image
                src={`/image/cloudImages/${item}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-28 object-cover justify-center"
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
