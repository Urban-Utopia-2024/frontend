import { Link } from 'react-router-dom';
import Tablet from '../assets/images/Tablet';
import map from '../assets/images/map.jpg';
import skyscrapers from '../assets/images/skyscrapers.jpg';
import { Routes } from '../constants/routes';

function MainPage() {
  return (
    <div className="mx-auto my-0 max-w-[90rem]">
      <h1 className="mx-4 mb-3 mt-6 md:mx-32">Улучшаем город вместе</h1>
      <p className="mx-4 mb-[52px] text-lg md:mx-32">
        Портал ЖКХ Екатеринбурга
      </p>
      <div className="mx-4 mb-[100px] grid max-w-[74rem] grid-cols-1 gap-5 md:mx-32 md:grid-cols-2 xl:grid-cols-3">
        <Link to={Routes.MAP} className="row-span-2 rounded-2xl xl:h-[644px]">
          <div className=" h-[312px] rounded-t-2xl bg-blue-100 pl-8 pr-[83px] pt-8 transition-all duration-300 hover:bg-blue-200">
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
        </Link>
        <Link
          to={Routes.NEWS}
          className="h-[312px] rounded-2xl bg-violet-100 pl-8 pr-[83px] pt-8 transition-all duration-300 hover:bg-violet-300"
        >
          <h3 className="mb-4">Новости</h3>
          <p>
            Рассказываем о выполненных и&nbsp;запланированных работах, новых
            законах, субботниках и&nbsp;других событиях в сфере жкх.
          </p>
        </Link>
        <div className="flex items-end xl:h-[312px]">
          <img
            className="h-full w-full rounded-b-2xl"
            src={skyscrapers}
            alt="Изображение небоскребов"
          ></img>
        </div>
        <Link
          to={Routes.REQUESTS}
          className="relative flex flex-col justify-between rounded-2xl bg-amber-100 py-8 pl-8 transition-all duration-300 hover:bg-amber-200 md:col-span-2 md:h-[312px]"
        >
          <div>
            <h3 className="mb-4">Заявки</h3>
            <p className="max-w-md">
              Подать обращение с жалобой или предложением, история заявок,
              отслеживание статуса своего обращения
            </p>
          </div>
          <div>
            <div className="mb-2 flex gap-3">
              <h2>1200</h2>
              <p className="pt-4">заявок обрабатываем в неделю</p>
            </div>
            <div className="flex gap-3">
              <h2>
                34 <span className="text-lg font-bold">ч.</span>
              </h2>
              <p className="pt-4">среднее время обработки</p>
            </div>
          </div>
          <div className="absolute bottom-8 right-14 z-0 max-h-[36.3rem] max-w-[13.75rem]">
            <Tablet />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
