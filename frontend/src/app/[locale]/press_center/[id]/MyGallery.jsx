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

// "use client";
// import Image from "next/image";
// import "photoswipe/dist/photoswipe.css";

// import { Gallery, Item } from "react-photoswipe-gallery";
// import ReactPlayer from "react-player";

// export const MyGallery = ({ data }) => {
//   const domain = "http://127.0.0.1:1337";
//   console.log("DATA", data.video_content.data);
//   return (
//     <div>
//       <Gallery>
//         <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {data?.photo_content?.data?.map((item) => {
//             return (
//               <Item
//                 original={`${domain + item.attributes?.url}`}
//                 thumbnail={`${domain + item.attributes?.url}`}
//                 width={item?.attributes?.width}
//                 height={item?.attributes?.height}
//               >
//                 {({ ref, open }) => (
//                   <Image
//                     ref={ref}
//                     onClick={open}
//                     src={`${domain + item.attributes?.url}`}
//                     className="h-full object-cover"
//                   />
//                 )}
//               </Item>
//             );
//           })}
//         </div>
//       </Gallery>
//       <div className="flex flex-col gap-4 justify-center mt-10">
//         {data?.video_content?.data?.map((item) => {
//           return (
//             <div className="flex justify-center">
//               <ReactPlayer
//                 controls={true}
//                 url={`${domain + item.attributes.url}`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// VOL 4
// "use client";
// import PhotoAlbum from "react-photo-album";
// import NextJsImage from "./NextJsImage";
// // import photos from "./photos";

// export const MyGallery = () => {
//   const images = [
//     // {
//     //   src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     //   width: 320,
//     //   height: 174,
//     //   isSelected: true,
//     //   caption: "After Rain (Jeshu John - designerspics.com)",
//     // },

//   ];
//   return (
//     // <div>test</div>
//     <PhotoAlbum
//       layout="rows"
//       photos={images}
//       renderPhoto={NextJsImage}
//       defaultContainerWidth={1200}
//       sizes={{ size: "calc(100vw - 240px)" }}
//     />
//   );
// };

"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./NextJsImage";
// import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import Image from "next/image";

export const MyGallery = ({ data }) => {
  const domain = "http://127.0.0.1:1337";
  const [index, setIndex] = useState(-1);

  let images = [];
  data?.photo_content?.data?.forEach((item) => {
    images.push({
      src: domain + item.attributes.url,
      width: item.attributes.width,
      height: item.attributes.height,
    });
  });

  return (
    <>
      {/* <PhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      /> */}

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.photo_content?.data?.map((item, index) => {
          return (
            <Image
              // ref={ref}
              onClick={() => {
                setIndex(index);
              }}
              src={`${domain + item.attributes?.url}`}
              width={item.attributes.width}
              height={item.attributes.height}
              className="h-full object-cover cursor-pointer"
            />
          );
        })}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        // open={open}
        // close={() => setOpen(false)}
        slides={images}
        render={{ slide: NextJsImage }}
      />

      <div className="flex flex-col gap-4 ">
        {data?.youtube_link.map((item) => {
          return (
            <iframe
              width="560"
              height="500"
              className="w-full"
              src={item.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          );
        })}
      </div>

      {data?.video_content?.data?.map((item) => {
        return (
          <video height="600" controls>
            <source src={domain + item.attributes.url} />
            Your browser does not support the video tag...
          </video>
        );
      })}
    </>
  );
};
