import React from 'react';
import MapResultItem from './MapResultItem';

const MapResult = () => {
  const results = [
    {
      id: 1,
      title: 'Плановое отключение воды на Малышевой',
      tags: ['Работы', 'Вода'],
      category: 'Новости',
      description: '20.11.23',
    },
    {
      id: 2,
      title: 'На Московской улице тополь упал на провода',
      tags: ['Работы', 'Вода'],
      category: 'Новости',
      description: '20.11.23',
      colorText: 'text-red-400',
    },
    {
      id: 3,
      title: 'Контейнер УК Телепорт',
      tags: ['Мусорки', 'Собрный'],
      category: 'Новости',
      description: '20.11.23',
      colorText: 'text-violet-400',
    },
    {
      id: 4,
      title: 'Контейнер УК Телепорт',
      tags: ['Мусорки', 'Собрный', 'Пластик'],
      category: 'Новости',
      description: '20.11.23',
      colorText: 'text-violet-400',
    },
    {
      id: 5,
      title: 'Контейнер УК Телепорт',
      tags: ['Мусорки', 'Собрный', 'Пластик'],
      category: 'Новости',
      description: '20.11.23',
      colorText: 'text-violet-400',
    },
    {
      id: 6,
      title: 'Контейнер УК Телепорт',
      tags: ['Мусорки', 'Собрный', 'Пластик'],
      category: 'Новости',
      description: '20.11.23',
      colorText: 'text-violet-400',
    },
  ];

  return (
    <div>
      <p className="mb-2 ml-4 text-base">12 результатов</p>
      <div className="flex max-h-[500px] flex-col overflow-auto">
        {results.map((res) => (
          <MapResultItem
            key={res.id}
            title={res.title}
            tags={res.tags}
            catagory={res.category}
            description={res.description}
            colorText={res.colorText}
          />
        ))}
      </div>
    </div>
  );
};

export default MapResult;
