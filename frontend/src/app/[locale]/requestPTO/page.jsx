// import { REQUEST_PTO } from "@/app/needed/constans";

import { useLocale } from "next-intl";
import { fetchPTO } from "../needed/services";
import clsx from "clsx";

export default async function RequestPTO() {
  const locale = useLocale();
  const data = await fetchPTO(locale);
  console.log(data.data[0].attributes.text);
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-prime">
        {data.data[0].attributes.title}
      </h2>
      <div className="mt-4">
        {data.data[0].attributes.text.map((item) => {
          return <div className="mt-2">{item.children[0].text}</div>;
        })}
      </div>
    </div>
  );
}

//Request_PTO
