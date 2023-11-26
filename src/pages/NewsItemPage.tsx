import BlockComments from '../components/news/BlockComments';
import NewsItem from '../components/news/NewsItem';

const NewsItemPage = () => {
  const someNews = [
    {
      id: 1,
      title: 'Как в 2024 году подорожают счета, но экономить будет не нужно',
      date: '20.11.23',
      tags: ['Вода', 'Электричество'],
      img: '/img/news/1.png',
      colorText: 'text-blue-400',
    },
    {
      id: 2,
      title: '«Коммуналка» в Свердловской области может подорожать на 14%',
      date: '18.11.23',
      tags: ['Вода', 'Электричество'],
      img: '/img/news/2.png',
      colorText: 'text-blue-400',
    },
    {
      id: 3,
      title: 'Обрабатывать зимние дороги Тюмени солью и отсевом будет ТОДЭП',
      date: '13.11.23',
      tags: ['Работы'],
      img: '/img/news/5.png',
      colorText: 'text-amber-500',
    },
  ];

  return (
    <main className="mx-auto my-0 mt-6 max-w-[1215px] px-4 pb-10">
      <div className="mb-10 flex flex-col md:flex-row md:justify-between">
        {/* Основной контент */}
        <div className="flex max-w-[600px] flex-col">
          <div className="mb-4 flex items-center gap-4">
            <p>17.11.23</p>

            <p className="text-xs font-bold text-violet-500">Мусор</p>
          </div>
          <h2 className="mb-8 text-4xl text-gray-950">
            В Свердловской области выросла стоимость вывоза мусора
          </h2>
          <img src="/img/news/full.png" className="mb-8 w-full object-cover" />

          <p className="mb-6">
            Свердловская область официально заявила о повышении тарифов на вывоз
            твёрдых бытовых отходов. Согласно новым изменениям, стоимость вывоза
            мусора в регионе возрастёт на 20% согласно утверждённым тарифам.
          </p>

          <p className="mb-6">
            Представители муниципалитета отметили, что увеличение тарифов
            обусловлено изменениями в экологических стандартах и улучшении
            системы обращения с отходами. По их словам, новая стоимость вывоза
            мусора позволит улучшить организацию системы утилизации и
            переработки отходов, что приведёт к повышению экологической чистоты
            региона.
          </p>

          <p className="mb-6">
            Тем временем, население выразило обеспокоенность по поводу
            увеличения тарифов на вывоз мусора, отмечая, что это может негативно
            сказаться на бюджетах семей и мелкого бизнеса. Несмотря на это,
            представители власти заверили, что увеличение тарифов является
            временной мерой и носит компенсационный характер для развития новых
            систем обращения с отходами.
          </p>

          <p className="mb-6">
            В результате, представители областной администрации собираются
            провести серию образовательных мероприятий и информационной
            кампании, чтобы общественность была в курсе об изменениях в системе
            управления отходами и причинах повышения тарифов.
          </p>
        </div>

        {/* Боковая часть */}
        <div className="mt-10 flex flex-col md:max-w-[405px]">
          <h3 className="mb-8 text-2xl font-extrabold">
            Самые обсуждаемые новости
          </h3>

          <div className="flex flex-col gap-6 sm:max-w-[280px]">
            {someNews.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <BlockComments />
    </main>
  );
};

export default NewsItemPage;
