// "use client";
// import { Gallery } from "react-grid-gallery";
// export const MyGallery = () => {
//   const images = [
//     {
//       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//       width: 320,
//       height: 174,
//       isSelected: true,
//       caption: "After Rain (Jeshu John - designerspics.com)",
//     },
//     {
//       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//       width: 320,
//       height: 212,
//       tags: [
//         { value: "Ocean", title: "Ocean" },
//         { value: "People", title: "People" },
//       ],
//       alt: "Boats (Jeshu John - designerspics.com)",
//     },
//     {
//       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//       width: 320,
//       height: 212,
//     },
//   ];

//   return <Gallery images={images} />;
// };

//VOL 2
// "use client";

// import Image from "next/image";
// import Masonry from "react-responsive-masonry";
// const images = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://i.pinimg.com/736x/85/81/41/8581411fff0ea5005a640d7a111b7cb5.jpg",
//     // width: 320,
//     // height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//   },
// ];
// export const MyGallery = () => {
//   console.log("SRC", images[0].src);
//   return (
//     <Masonry columnsCount={3} gutter="10px">
//       {images.map((image, i) => (
//         <img
//           key={i}
//           src={image.src}
//           alt=""
//           style={{ width: "100%", height: "100%", display: "block" }}
//         />
//       ))}
//     </Masonry>
//   );
// };

// VOL PROD

"use client";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import ReactPlayer from "react-player";

export const MyGallery = ({ data }) => {
  const domain = "http://127.0.0.1:1337";
  console.log("DATA", data.video_content.data);
  return (
    <div>
      <Gallery>
        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* <Item
            original="https://w.forfun.com/fetch/03/0348ba0afd06db9986c527dacf008cdb.jpeg"
            thumbnail="https://w.forfun.com/fetch/03/0348ba0afd06db9986c527dacf008cdb.jpeg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src="https://w.forfun.com/fetch/03/0348ba0afd06db9986c527dacf008cdb.jpeg"
                className="h-full object-cover"
              />
            )}
          </Item> */}
          {data?.photo_content?.data?.map((item) => {
            return (
              <Item
                original={`${domain + item.attributes?.url}`}
                thumbnail={`${domain + item.attributes?.url}`}
                width={item.attributes?.width}
                height={item.attributes?.height}
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={`${domain + item.attributes?.url}`}
                    className="h-full object-cover"
                  />
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>
      <div className="flex flex-col gap-4 justify-center mt-10">
        {data?.video_content?.data?.map((item) => {
          return (
            <div className="flex justify-center">
              <ReactPlayer
                controls={true}
                url={`${domain + item.attributes.url}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
