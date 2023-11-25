import { SearchOutlined } from '@ant-design/icons';
import { YMaps } from '@pbe/react-yandex-maps';
import { Button, Input } from 'antd';
import React from 'react';
import WorkIcon from '../assets/icons/WorkIcon';
import { CategoryType } from '../types/enum';
import YandexMap from '../components/map/YandexMap';
import MapResult from '../components/map/MapResult';

function MapPage() {
  // Все выбранные категории
  const [selectedCategories, setSelectedCategories] = React.useState<number[]>([
    CategoryType.WORK,
    CategoryType.INCIDENT,
    CategoryType.EVENT,
    CategoryType.TRASH,
  ]);

  // Список всех категорий
  const categories = [
    {
      id: CategoryType.WORK,
      name: 'Работы',
      icon: <WorkIcon />,
      color: 'bg-amber-200',
    },
    {
      id: CategoryType.INCIDENT,
      name: 'Аварии',
      icon: <WorkIcon />,
      color: 'bg-red-200',
    },
    {
      id: CategoryType.EVENT,
      name: 'Активности',
      icon: <WorkIcon />,
      color: 'bg-blue-100',
    },
    {
      id: CategoryType.TRASH,
      name: 'Мусорки',
      icon: <WorkIcon />,
      color: 'bg-violet-100',
    },
  ];

  const handleCategoryToggle = (category: number) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category],
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
            <div className="mb-6 flex flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  className="flex h-20 flex-col items-center p-2"
                  type="text"
                  onClick={() => handleCategoryToggle(cat.id)}
                >
                  <div
                    className={`${
                      selectedCategories.includes(cat.id)
                        ? cat.color
                        : 'bg-gray-200'
                    } mb-1 flex h-12 w-[48px] items-center justify-center rounded-lg p-2`}
                  >
                    {cat.icon}
                  </div>
                  <p className="text-xs">{cat.name}</p>
                </Button>
              ))}
            </div>
          </div>

          {/* Результаты */}
          <MapResult />
        </div>
        <YandexMap category={selectedCategories} />
      </div>
    </YMaps>
  );
}

export default MapPage;
