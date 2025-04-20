"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const SimpleSlider= () => {
  var settings = {
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
      <div>
        <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={'text' }
                      src=
                        "/banner/i1.jpg"

                      className=" w-full   object-cover"
                    />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
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