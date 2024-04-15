import { useLocale } from "next-intl";
import { fetchPerformBlocks } from "@/app/[locale]/needed/services";
import Image from "next/image";

export default async function PerformItems({}) {
  const locale = useLocale();
  const perform_items = await fetchPerformBlocks(locale);
  const domain = "http://127.0.0.1:1337";

  return (
    <div>
      {perform_items?.data.map((item) => {
        const imageUrl = domain + item.attributes.icon.data.attributes.url;
        // console.log(item.attributes.Year[0].number);
        return (
          <PerfromItem
            key={item.id}
            title={item.attributes.title}
            number={item.attributes.Year[0].number}
            unit={item.attributes.unit}
            icon={imageUrl}
            // activeYear={activeYear}
          />
        );
      })}
    </div>
  );
}

const PerfromItem = ({ title, icon, number, unit, activeYear }) => {
  return (
    <div className="pb-6 pt-2 px-3 border-2 border-prime bg-white transition-all w-[168px] hover:scale-105 hover:shadow-main shadow-prime">
      <div className="flex items-center justify-center">
        {/* <PerformIcon key={icon} icon={icon} className="w-12" /> */}
        <Image
          src={icon}
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 object-cover justify-center"
        ></Image>
      </div>
      <div className="mt-3 text-prime text-center text-xl font-semibold">
        {/* {number[activeYear]} */}
      </div>
      <div className="text-prime text-center text-base font-semibold">
        {unit}
      </div>
      <div className="mt-3 text-def_black text-center text-sm font-normal leading-tight">
        {title}
      </div>
    </div>
  );
};
