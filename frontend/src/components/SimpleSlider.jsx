"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const PHOTOS = [
  "/banner/i1.jpeg",
  "/banner/i2.jpeg",
  "/banner/i3.jpeg",
  "/banner/i4.jpeg",
  "/banner/i5.jpeg",
];

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
};

export const SimpleSlider = ({ className }) => (
  <Slider className={className} {...SETTINGS}>
    {PHOTOS.map((item, index) => (
      <div key={item}>
        <Image
          src={item}
          alt=""
          width={640}
          height={480}
          sizes="(min-width: 1024px) 520px, 100vw"
          priority={index === 0}
          className="w-full aspect-[4/3] object-cover rounded-lg"
        />
      </div>
    ))}
  </Slider>
);
