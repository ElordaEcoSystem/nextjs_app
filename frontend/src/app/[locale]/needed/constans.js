export const PERFORM_YEAR_BUTTONS = [2023, 2022, 2021, 2020];
export const PERFORM_ICONS = {
  WASH: "wash",
  CLEAR: "clear",
  STEAM: "steam",
  ARCH: "arch",
  PUMP: "pump",
};

export const PERFROM_STATS = [
  {
    id: 1,
    title: "Промыто коллекторов",
    icon: "wash",
    number: { 2020: 34514, 2021: 53816, 2022: 55130, 2023: 52221 },
    unit: "м.п.",
  },
  {
    id: 2,
    title: "Очищено смотровых и дождеприемных колодцев",
    icon: "clear",
    number: { 2020: 3103, 2021: 3002, 2022: 3082, 2023: 4019 },
    unit: "шт.",
  },
  {
    id: 3,
    title: "Пропарено труб",
    icon: "steam",
    number: { 2020: 0, 2021: 10244, 2022: 6504, 2023: 8190 },
    unit: "м.",
  },
  {
    id: 4,
    title: "Очищено арычно-лотковой сети",
    icon: "arch",
    number: { 2020: 31425, 2021: 61667, 2022: 88090, 2023: 90025 },
    unit: "м.п.",
  },
  {
    id: 5,
    title: "Откачено воды с начала паводка",
    icon: "pump",
    number: { 2020: 50054, 2021: 15150, 2022: 14050, 2023: 43031 },
    unit: "м3",
  },
];

export const REQUEST_PTO = [
  "Сопроводительное письмо на имя генерального директора (в свободной форме)",
  "Исполнительная съемка (оригинал) с деталировкой колодцев, профиль ливневой канализации",
  "Рабочий проект. Раздел ливневая канализация (наружные сети)",
  "Технические условия на ливневую канализацию объекта",
  "Акт пролива и проверки прямолинейности ливневой канализации, визуальный осмотр комплектности смотровых и дождеприемных колодцев (ГКП на ПХВ «Elorda Eco System»)",
  "Акт проведения диагностики сетей телеинспекцией (ГКП на ПХВ «Elorda Eco System»)",
  "Технический паспорт «Правительство для граждан» на ЛНС",
  "Акт на землю",
  "Проект насосной станции",
  "Исполнительная схема НС (оригинал)",
  "Паспорта на насосное оборудование с электродвигателями",
  "Паспорта на дополнительное оборудование (электрозадвижка, шибер, шкребки, осушители ила, фильтры)",
];

export const JOBS_ARR = [
  "Мастер по эксплуатации насосных станций и очистных сооружений",
  "Инженер-сметчик",
  "Инженер-технадзор",
  "Инженер-техник",
  "Мастер (РСУ)",
  "Инженер-энергетик (насосные установки и очистные сооружения)",
  "Заведующий складом",
  "Инженер (ПТО)",
  "Бригадир слесарей АВР",
  "Слесарь АВР",
  "Газоэлектросварщик",
  "Дорожный рабочий",
  "Слесарь-сантехник",
  "Машинист насосных установок",
  "Оператор очистных сооружений",
  "Фрезеровщик",
  "Слесарь по ремонту дорожно-строительных машин и тракторов",
  "Слесарь по ремонту гидравлики",
  "Слесарь",
  "Электромонтер по ремонту и обслуживанию электрооборудования",
  "Рабочий по комплексному обслуживанию и ремонту зданий",
  "Водитель специальной техники (илосос)",
  "КО-520 ЗИЛ",
  "КО-505 Камаз ас машины",
  "Машинист трактора",
  "Машинист трактора TLB825",
  "Водитель CAMЕL (илосос)",
  "Водитель телеинспекционной автолаборатории",
  "Водитель автобуса",
  "Водитель манипулятора",
  "Машинист экскаватора",
  "Водитель спец.техники (каналопромывочной машины КО-512)",
  "Оператор каналопромывочной машины КО-512",
  "Водитель  ППУА-1600/100  (парообразователь)",
  "Водитель грузового транспорта (самосвала)",
  "Машинист автокрана",
  "Плотник",
  "Слесарь по топливной аппаратуре",
];

export const NEWS_DATA = [
  // {
  //   id: 1,
  //   thumbnail: "thumbnail.jpg",
  //   title: "ЗАКОНЫ О РЕЛИГИИ",
  //   description: "",
  //   date: "25/01/2024",
  // },
  {
    id: 2,
    thumbnail: "thumbnail.jpg",
    title: "МАШИНА ДЛЯ РЕМОНТА АВТОМОБИЛЕЙ",
    description:
      "Необходимость выполнения аварийных работ: АРМ(аварийно-ремонтная машина) предназначен для решения аварийных ситуаций на участках ливневой канализации, насосных станций и очистных сооружений. Обладает специальными инструментами, необходимыми для решения возникающих проблем. Наличие этой техники позволит быстро и эффективно вмешаться в случае аварий и предотвратить возможные последствия. Имеет достаточное количество мест для перевозки рабочего персонала, что создаст более комфортные […]",
    date: "17/01/2024",
  },
  {
    id: 3,
    thumbnail: "thumbnail.jpg",
    title: "ПОЖАРНАЯ БЕЗОПАСНОСТЬ",
    description:
      "На нашем Предприятии уделяется особое внимание вопросам безопасности и охраны труда, в том числе вопросам противопожарной безопасности. В этой связи, во всех кабинетах и цехах установлены огнетушители класса ОП-5. После установки огнетушителей, всем работникам предприятия проведен инструктаж по применению первичных средств пожаротушения.",
    date: "15/01/2024",
  },
  {
    id: 4,
    thumbnail: "thumbnail.jpg",
    title: "ТРЕНИНГ ПО ТРУДОВОМУ ЗАКОНОДАТЕЛЬСТВУ",
    description:
      "В первый рабочий день 2024 года администрация и профсоюз для работников Предприятия, в рамках правового всеобуча организовали тренинг на тему: «Индивидуальные трудовые споры, последние изменения трудового законодательства Республики Казахстана 2023 г. Управление конфликтами».Приглашенный спикер Агибаева Бибигуль Шакирбаевна- доктор PhD, MBA, бизнес- тренер ICBT, NLP мастер ISTA, коуч CCE ICF поделилась своим опытом и знаниями в […]",
    date: "04/01/2024",
  },
  {
    id: 5,
    thumbnail: "thumbnail.jpg",
    title: "НОВЫЙ 2024 ГОД!",
    description:
      "Новый год — радостный и всеми любимый праздник к встрече которого тщательно готовимся! В преддверии нового года, подводим итоги старого. Мы поздравляем всех с этим чудесным днем и хотели поделится итогами работы Предприятия за 2023 год.За небольшой период своей работы нами проделан большой объем работы по водоотведению и очистке ливневой канализации города. Мы ставим перед […]",
    date: "01/01/2024",
  },
  {
    id: 6,
    thumbnail: "thumbnail.jpg",
    title: "ГИМН ИСПОЛНЕННЫЙ ДИМАШЕМ",
    description:
      "Бесценный дар Димаша Кудайбергена в очередной раз проявился при исполнений Гимна РК в новом формате после новогоднего поздравления Президента РК, это демонстрация его особенного голоса, гордость берет за Родину!!! Этот день можно назвать днем, когда Димаш влюбил весь мир в Гимн Казахстана!!!",
    date: "01/01/2024",
  },
  {
    id: 7,
    thumbnail: "thumbnail.jpg",
    title: "СПАРТАКИАДА 2023",
    description:
      "🏆🎉Мы рады сообщить о нашем замечательном дебюте на «Спартакиада-2023»! 🎉🏆Огромные поздравления нашим талантливым коллегам, которые продемонстрировали свои исключительные навыки и спортивное мастерство, заработав нам фантастическое 5-е место в общем зачете! 🌟Давайте отдельно поприветствуем наших выдающихся спортсменов, завоевавших заслуженные места на подиуме в своих дисциплинах: 🏋‍♂ Косжанов Абдыгали (Отдел эксплуатации оборудования)Дисциплина: Поднятие гири массой 24 кг.Весовая […]",
    date: "21/12/2023",
  },
  {
    id: 8,
    thumbnail: "thumbnail.jpg",
    title: "16 ДЕКАБРЯ — ДЕНЬ НЕЗАВИСИМОСТИ",
    description:
      "Вот уже более трех лет ГКП на ПХВ “Elorda Eco System” стоит на страже жизнеобеспечения коммунальной сферы нашей столицы.Поздравить коллектив Предприятия пришли: депутат Мажилиса Парламента РК Назаров Ардак, депутаты маслихата города Астаны Сергеев Владислав, Дакенов Ерлан, руководитель Дирекции развития спорта по неолимпийским видам акимата города Астаны Алдашев Дастан, серебряный призёр чемпионата мира по боксу Нурбек […]",
    date: "16/12/2023",
  },
  {
    id: 9,
    thumbnail: "thumbnail.jpg",
    title: "УСТАНОВКА ДОПОЛНИТЕЛЬНЫХ ОТЛИВОК ДОЖДЕВОЙ ВОДЫ",
    description:
      "Устранение проблем сетей ливневой канализации в городе Астана. В период выпадения осадков в виде дождя образуется скопление воды на перекрестке улиц Аманжолова — Байтурсынова в месте, где находится пешеходный переход. Специалистами Предприятия было принято решение установить дополнительные дождеприемные решетки для устранения подтопления указанного участка. В процессе выполнения работ, использовался компрессор, манипулятор, бензиново-дизельный генератор, дождеприемная решетка […]",
    date: "28/11/2023",
  },
  {
    id: 10,
    thumbnail: "thumbnail.jpg",
    title: "15 НОЯБРЯ — ДЕНЬ НАЦИОНАЛЬНОЙ ВАЛЮТЫ",
    description:
      "«Шлю сердечные поздравления каждому члену уважаемого коллектива с этим важным праздником – Днем национальной валюты Казахстана. История тенге является свидетельством нашей способности адаптироваться, внедрять инновации и способствовать укреплению суверенитета Республики Казахстан. Со времени исторической денежной реформы 1993 года и до сегодняшнего дня наша валюта была символом нашей экономической независимости. Отмечая этот важный день, позвольте выразить […]",
    date: "15/11/2023",
  },
];
export const DIRECTORS_DATA = [
  // {
  //   photoName: "Купешов_Нурлан_Маратович.jpeg",
  //   fullName: "Купешов Нурлан Маратович",
  //   positionOfCompany: "Генеральный директор",
  //   internalNumber: 102,
  //   reception: { day: "Четверг", time: { start: "15:00", end: "17:00" } },
  // },
  {
    photoName: "Гарифуллин_Бахтияр_Салаватович.jpg",
    fullName: "Гарифуллин Бахтияр Салаватович",
    positionOfCompany: "Заместитель Генерального директора",
    internalNumber: 109,
    reception: { day: "Вторник", time: { start: "15:00", end: "17:00" } },
  },
  {
    photoName: "Маркабаев_Марат_Онайбаевич.jpg",
    fullName: "Маркабаев Марат Онайбаевич",
    positionOfCompany: "Заместитель Генерального директора",
    internalNumber: 103,
    reception: { day: "Понедельник", time: { start: "15:00", end: "17:00" } },
  },
  {
    photoName: "Омаров_Ергали_Гусманович.jpg",
    fullName: "Омаров Ергали Гусманович",
    positionOfCompany: "Заместитель Генерального директора",
    internalNumber: 105,
    reception: { day: "Вторник", time: { start: "15:00", end: "17:00" } },
  },
  {
    photoName: "Шильдебаева_Асемгуль_Кианбаевна.jpg",
    fullName: "Шильдебаева Асемгуль Кианбаевна",
    positionOfCompany: "Главный бухгалтер",
    internalNumber: 106,
    reception: { day: "", time: { start: "15:00", end: "17:00" } },
  },
];
