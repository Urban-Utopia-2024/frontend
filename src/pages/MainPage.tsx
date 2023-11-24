import map from '../assets/images/map.jpg';
import skyscrapers from '../assets/images/skyscrapers.jpg';

function MainPage() {
  return (
    <div className="mx-auto my-0 max-w-[90rem]">
      <h1 className="mx-4 mb-3 mt-6 md:mx-32">Улучшаем город вместе</h1>
      <p className="mx-4 mb-[52px] text-lg md:mx-32">
        Портал ЖКХ Екатеринбурга
      </p>
      <div className="mx-4 mb-[100px] grid max-w-[74rem] grid-cols-1 gap-5 md:mx-32 md:grid-cols-2 xl:grid-cols-3">
        <div className="row-span-2 rounded-2xl xl:h-[644px]">
          <div className=" h-[312px] rounded-t-2xl bg-blue-100 pl-8 pr-[83px] pt-8">
            <h3 className="mb-4">Карта плановых работ</h3>
            <p>
              Показываем, где сейчас проходят плановые работы по улучшению
              нашего города. Отмечаем важные места и мероприятия.
            </p>
          </div>
          <img
            className="w-full rounded-b-2xl"
            src={map}
            alt="Карта Екатеринбурга"
          ></img>
        </div>
        <div className="h-[312px] rounded-2xl bg-violet-100 pl-8 pr-[83px] pt-8">
          <h3 className="mb-4">Новости</h3>
          <p>
            Показываем, где сейчас проходят плановые работы по улучшению нашего
            города. Отмечаем важные места и мероприятия.
          </p>
        </div>
        <div className="flex items-end xl:h-[312px]">
          <img
            className="h-full w-full rounded-b-2xl"
            src={skyscrapers}
            alt="Изображение небоскребов"
          ></img>
        </div>
        <div className="h-[312px] rounded-2xl bg-amber-100 py-8 pl-8 md:col-span-2">
          <h3 className="mb-4">Заявки</h3>
          <p>
            Подать обращение с жалобой или предложением, история заявок,
            отслеживание статуса своего обращения
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
