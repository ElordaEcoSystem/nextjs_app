import { DIRECTORS_DATA } from "@/app/[locale]/needed/constans";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { fetchAbout } from "../needed/services";
export default async function About() {
  const locale = useLocale();
  const about = await fetchAbout(locale);

  // const imageUrl =
  //   domain + blog.data.attributes?.thumbnail?.data.attributes.url;

  // console.log("ABOUT", about.data[0].attributes.director);
  // console.log(
  //   "ABOUT",
  //   about.data[0].attributes.director[0].photo.data.attributes.url
  // );
  const domain = "http://127.0.0.1:1337";

  return (
    <>
      <section className="bg-prime">
        <div className="container py-12 flex flex-col gap-4 ">
          <h2 className="text-3xl font-bold text-white">
            {about.data[0].attributes.title}
          </h2>
          <div className="text-sm text-white flex flex-col gap-4">
            {about.data[0].attributes.description.map((item) => {
              return <div>{item.children[0].text}</div>;
            })}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ">
            {about.data[0].attributes.sub_title}
          </h2>
          {about.data[0].attributes.director.map(
            ({ position, full_name, reception_schedule, number }) => {
              const imageUrl =
                domain +
                about.data[0].attributes.director[0].photo.data?.attributes
                  ?.url;

              return (
                <div className="mt-5">
                  {DirectorCard({
                    position,
                    imageUrl,
                    full_name,
                    reception_schedule,
                    number,
                  })}
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
}

const DirectorCard = ({
  position,
  full_name,
  reception_schedule,
  number,
  imageUrl,
}) => {
  return (
    <div className="shadow-lg p-5 flex gap-4  ">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        className="h-72 w-72 object-cover justify-center"
      />
      <div className="py-2 flex flex-col gap-2">
        <div className=" text-lg ">{position}</div>
        <div className=" text-3xl text-prime font-bold">{full_name}</div>
        {/* <div className="  text-base mt-4">dasd</div> */}
        <div className=" text-base text-black mt-1 flex">
          Телефон: &nbsp;
          <div className="text-prime font-medium">{number}</div>
        </div>
        <div className="flex">
          График приема граждан:&nbsp;
          <div className="text-prime font-medium">{reception_schedule}</div>
        </div>
        {/* <div>
          <button className="px-5 py-1 bg-prime rounded-sm text-white font-semibold text-sm hover:scale-105 transition-all duration-300">
            Запись
          </button>
        </div> */}
      </div>
    </div>
  );
};
