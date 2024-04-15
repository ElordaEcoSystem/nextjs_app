import { DIRECTORS_DATA } from "@/app/[locale]/needed/constans";
import Image from "next/image";
import React from "react";
export default function About() {
  return (
    <>
      <section className="bg-prime">
        <div className="container py-12 flex flex-col gap-4 ">
          <h2 className="text-3xl font-bold text-white">Об организации</h2>
          <div className="text-sm text-white">
            ГКП на ПХВ «Elorda Eco System» создано путём переименования ГКП на
            ПХВ «Көркем-құймакомбинаты» согласно постановления акимата города
            Астаны от 15.01.2020 года за № 509-85
            <br />
            <br />
            Учредитель – акимат города Астаны, в лице ГУ «Управление
            топливно-энергетического комплекса и коммунального хозяйства города
            Астаны».
            <br />
            <br />
            Предмет деятельности Предприятия — жизнеобеспечение города Астаны и
            пригородных населенных пунктов по оказанию услуг водоотведения
            (эксплуатация и обслуживание сетей ливневой канализации).
            <br />
            <br />
            Целью деятельности Предприятия является хозяйственная деятельность в
            сфере предоставления услуг по отводу ливневых стоков, дренажных и
            грунтовых вод (эксплуатация и обслуживание ливневой и дренажной
            канализации, насосных станций, очистных сооружений (жизнеобеспечение
            инфраструктуры города)).
            <br />
            <br />
            Адрес дислокации: РК, г. Астана, 010000, район «Байконыр», ул.
            Жетіген, 24. Телефон приемной — 918-453 Дата государственной
            перерегистрации 24.01.20 г.
            <br />
            <br />
            БИН 100240018496
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ">Структура</h2>
          {DIRECTORS_DATA.map(
            ({
              photoName,
              fullName,
              positionOfCompany,
              internalNumber,
              reception,
            }) => {
              return (
                <div className="mt-5">
                  {DirectorCard({
                    photoName,
                    fullName,
                    positionOfCompany,
                    internalNumber,
                    reception,
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
  photoName,
  positionOfCompany,
  fullName,
  internalNumber,
  reception,
}) => {
  return (
    <div className="shadow-lg p-5 flex gap-4  ">
      <Image
        src={`/image/DirectorsImage/${photoName}`}
        width={0}
        height={0}
        sizes="100vw"
        className="h-72 w-72 object-cover justify-center"
      />
      <div className="py-2 flex flex-col gap-2">
        <div className=" text-lg ">{positionOfCompany}</div>
        <div className=" text-3xl text-prime font-bold">{fullName}</div>
        {/* <div className="  text-base mt-4">dasd</div> */}
        <div className=" text-base text-black mt-1 flex">
          Телефон: &nbsp;
          <div className="text-prime font-medium">
            918-453 ({internalNumber})
          </div>
        </div>
        <div className="flex">
          График приема граждан:&nbsp;
          <div className="text-prime font-medium">
            {reception.day} с {reception.time.start}-{reception.time.end}
          </div>
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
