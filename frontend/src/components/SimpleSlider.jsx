"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const SimpleSlider= () => {
  const photos = [
    "/banner/i1.jpeg",
    "/banner/i2.jpeg",
    "/banner/i3.jpeg",
    "/banner/i4.jpeg",
    "/banner/i5.jpeg"
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <Slider className="w-[400px] h-full " {...settings}>
      {photos.map((item, index) => {
        return (
          <div key={item}>
            <Image
              src={item}
              alt=""
              width={400}
              height={300}
              sizes="400px"
              priority={index === 0}
              className="w-full h-full object-cover "
            />
          </div>
        );
      })}

    </Slider>
  );
}

// export const SimpleSlider= () => {
//   return (
//     <div className="w-[300px] h-[300px] bg-red-500">
//       <h3>1</h3>
//     </div>
//   );
// }