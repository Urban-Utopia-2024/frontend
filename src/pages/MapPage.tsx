import { SearchOutlined } from '@ant-design/icons';
import { YMaps } from '@pbe/react-yandex-maps';
import { Button, Input } from 'antd';
import React from 'react';
import { ActivityIcon, TechIcon, TrashIcon, WorkIcon } from '../assets';
import MapResult from '../components/map/MapResult';
import YandexMap from '../components/map/YandexMap';
import { CategoryType } from '../types/enum';
import { Category } from '../types';

function MapPage() {
  // Центр карты
  const [mapCenter, setMapCenter] = React.useState<[number, number]>([
    56.8331934833199, 60.61239460156242,
  ]);

  // Зум карты
  const [mapZoom, setMapZoom] = React.useState<number>(10);

  // Все выбранные категории
  const categories: Category[] = [
    {
      id: CategoryType.WORK,
      name: 'Работы',
      icon: <WorkIcon />,
      color: 'bg-amber-200',
      preset: 'islands#yellowClusterIcons',
      marker: 'work_mark',
      items: [
        {
          id: 1,
          title: 'Плановое отключение воды на Малышевой',
          tags: ['Работы', 'Вода'],
          category: 'Новости',
          description: '20.11.23',
          coords: [56.92717648238634, 60.4723189179687],
        },
        {
          id: 2,
          title: 'На Московской улице тополь упал на провода',
          tags: ['Работы', 'Вода'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-red-400',
          coords: [56.94069049836607, 60.503904611328075],
        },
        {
          id: 3,
          title: 'На Московской улице тополь упал на провода',
          tags: ['Работы', 'Вода', 'Дороги'],
          category: 'Новости',
          description: '21.11.23',
          colorText: 'text-red-400',
          coords: [56.71028293054757, 60.57256916210931],
        },
      ],
    },
    {
      id: CategoryType.INCIDENT,
      name: 'Аварии',
      icon: <TechIcon />,
      color: 'bg-red-200',
      preset: 'islands#redClusterIcons',
      marker: 'tech_mark',
      items: [
        {
          id: 2,
          title: 'На Московской улице тополь упал на провода',
          tags: ['Аварии', 'Вода'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-red-400',
          coords: [56.91475682641906, 60.810056467489325],
        },
      ],
    },
    {
      id: CategoryType.EVENT,
      name: 'Активности',
      icon: <ActivityIcon />,
      color: 'bg-blue-100',
      preset: 'islands#blueClusterIcons',
      marker: 'event_mark',
      items: [
        {
          id: 3,
          title: 'Убери пакет мусора и получили целых 250 рублей',
          tags: ['Активности', 'Сборный'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-blue-400',
          coords: [56.92452070401849, 60.768857737020596],
        },
        {
          id: 4,
          title: 'Убери два пакета с мусором и получили целых 350 рублей',
          tags: ['Активности', 'Сборный', 'Пластик'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-blue-400',
          coords: [56.90536606391161, 60.76679780049714],
        },
      ],
    },
    {
      id: CategoryType.TRASH,
      name: 'Мусорки',
      icon: <TrashIcon />,
      color: 'bg-violet-100',
      preset: 'islands#violetClusterIcons',
      marker: 'trash_mark',
      items: [
        {
          id: 5,
          title: 'Контейнер УК Телепорт',
          tags: ['Мусорки', 'Собрный', 'Пластик'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-violet-400',
          coords: [56.763870334346116, 60.75796344921869],
        },
        {
          id: 6,
          title: 'Контейнер УК Телепорт',
          tags: ['Мусорки', 'Собрный', 'Пластик'],
          category: 'Новости',
          description: '20.11.23',
          colorText: 'text-violet-400',
          coords: [56.73670884396426, 60.75933674023432],
        },
      ],
    },
  ];

  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);

  // Добавляю или удаляю категорию
  const handleCategoryToggle = (categoryId: CategoryType) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.some((c) => c.id === categoryId)
        ? prevCategories.filter((c) => c.id !== categoryId)
        : [
            ...prevCategories,
            categories.find((c) => c.id === categoryId) || {
              id: categoryId,
              name: '',
              preset: '',
              marker: '',
              icon: <></>,
              color: '',
              items: [],
            },
          ],
    );
  };

  return (
    <YMaps>
      <div className="-mt-32 flex flex-col px-4 pt-32 lg:h-screen lg:flex-row">
        <div className="w-full overflow-hidden rounded-t-xl border-2 py-4 lg:w-[400px] lg:min-w-[400px] lg:rounded-l-xl lg:rounded-tr-none">
          <div className="px-4">
            <Input
              size="large"
              placeholder="Искать по адресу"
              prefix={<SearchOutlined />}
              className="mb-6"
            />
            <h2 className="mb-4 font-gilroy text-2xl font-extrabold text-gray-950">
              Что показать:
            </h2>

            {/* Категории */}
            <div className="-ml-2 mb-6 flex flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  className="flex h-20 flex-col items-center p-2"
                  type="text"
                  onClick={() => handleCategoryToggle(cat.id)}
                >
                  <div
                    className={`${
                      selectedCategories.some((c) => c.id === cat.id)
                        ? cat.color
                        : 'bg-gray-200'
                    } mb-1 flex min-h-[48px] w-[48px] items-center justify-center rounded-lg p-2`}
                  >
                    {cat.icon}
                  </div>
                  <p className="text-xs">{cat.name}</p>
                </Button>
              ))}
            </div>
          </div>

          {/* Результаты */}
          <MapResult
            categories={selectedCategories}
            setMapCenter={setMapCenter}
            setMapZoom={setMapZoom}
          />
        </div>
        <YandexMap
          categories={selectedCategories}
          mapCenter={mapCenter}
          mapZoom={mapZoom}
        />
      </div>
    </YMaps>
  );
}

export default MapPage;
