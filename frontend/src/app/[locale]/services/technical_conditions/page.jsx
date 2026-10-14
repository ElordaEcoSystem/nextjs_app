import { fetchPTO } from "../../needed/services";
import { blockText } from "../../needed/format";

export default async function RequestPTO({ params: { locale } }) {
  const data = await fetchPTO(locale);
  const entry = data?.data?.[0]?.attributes;

  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold text-def_black">{entry?.title}</h2>
      <div className="mt-4">
        {entry?.text?.map((item, index) => (
          <div key={index} className="mt-2">
            {blockText(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
