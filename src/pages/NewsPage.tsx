import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Category } from '../types';
import { CategoryType } from '../types/enum';
import { ActivityIcon, TechIcon, TrashIcon, WorkIcon } from '../assets';
import React from 'react';
import NewsItem from '../components/news/NewsItem';

function NewsPage() {
  // Все выбранные категории
  const categories: Category[] = [
    {
      id: CategoryType.WORK,
      name: 'Работы',
      icon: <WorkIcon />,
      color: 'bg-amber-200',
      news: [
        {
          id: 4,
          title:
            'Обрабатывать зимние дороги Тюмени солью и отсевом будет ТОДЭП',
          date: '21.11.23',
          tags: ['Работы'],
          img: '/img/news/5.png',
          colorText: 'text-amber-500',
        },
        {
          id: 5,
          title:
            'Обрабатывать зимние дороги Тюмени солью и отсевом будет ТОДЭП',
          date: '20.11.23',
          tags: ['Работы'],
          img: '/img/news/5.png',
          colorText: 'text-amber-500',
        },
        {
          id: 6,
          title:
            'Обрабатывать зимние дороги Тюмени солью и отсевом будет ТОДЭП',
          date: '13.11.23',
          tags: ['Работы'],
          img: '/img/news/5.png',
          colorText: 'text-amber-500',
        },
      ],
    },
    {
      id: CategoryType.INCIDENT,
      name: 'Аварии',
      icon: <TechIcon />,
      color: 'bg-red-200',
      news: [
        {
          id: 7,
          title:
            'Жители еще одного поселка под Тюменью остались без света из-за серых схем подключения',
          date: '15.11.23',
          tags: ['Авария'],
          img: '/img/news/4.png',
          colorText: 'text-red-400',
        },
        {
          id: 8,
          title:
            'Жители еще одного поселка под Тюменью остались без света из-за серых схем подключения',
          date: '12.11.23',
          tags: ['Авария'],
          img: '/img/news/4.png',
          colorText: 'text-red-400',
        },
      ],
    },
    {
      id: CategoryType.EVENT,
      name: 'События',
      icon: <ActivityIcon />,
      color: 'bg-blue-100',
      news: [
        {
          id: 9,
          title:
            'Как в 2024 году подорожают счета, но экономить будет не нужно',
          date: '20.11.23',
          tags: ['Вода', 'Электричество'],
          img: '/img/news/1.png',
          colorText: 'text-blue-400',
        },
        {
          id: 10,
          title: '«Коммуналка» в Свердловской области может подорожать на 14%',
          date: '18.11.23',
          tags: ['Вода', 'Электричество'],
          img: '/img/news/2.png',
          colorText: 'text-blue-400',
        },
      ],
    },
    {
      id: CategoryType.TRASH,
      name: 'Мусорки',
      icon: <TrashIcon />,
      color: 'bg-violet-100',
      news: [
        {
          id: 11,
          title: 'В Свердловской области выросла стоимость вывоза мусора',
          date: '17.11.23',
          tags: ['Мусор'],
          img: '/img/news/3.png',
          colorText: 'text-violet-500',
        },
        {
          id: 12,
          title: 'В Свердловской области выросла стоимость вывоза мусора',
          date: '17.11.23',
          tags: ['Мусор'],
          img: '/img/news/3.png',
          colorText: 'text-violet-500',
        },
      ],
    },
  ];

  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);

  const [searchTerm, setSearchTerm] = React.useState('');

  // const filteredNews = news.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

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
              icon: <></>,
              color: '',
              news: [],
            },
          ],
    );
  };

  // Поиск
  const handleSearch = () => {
    const filteredCategories = categories.map((category) => {
      if (category.news) {
        return {
          ...category,
          news: category.news.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        };
      }
      return category; // Return the category as is if news is undefined
    });

    setSelectedCategories(filteredCategories);
  };

  return (
    <main className="mx-auto my-0 mt-6 max-w-[1184px] px-4 pb-10">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-5 flex items-center gap-5 md:mb-0">
          <Input
            size="large"
            placeholder=""
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={handleSearch}
          />

          <Button
            onClick={() => handleSearch()}
            className="flex h-12 w-40 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none"
          >
            Искать
          </Button>
        </div>

        {/* Фильтры по категориям */}
        <div className="flex">
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
                } mb-1 flex min-h-[48px] w-[48px] items-center justify-center rounded-lg`}
              >
                {cat.icon}
              </div>
              <p className="text-xs">{cat.name}</p>
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {selectedCategories &&
          selectedCategories.map(
            (category) =>
              category.news &&
              category.news.map((item) => (
                <NewsItem key={item.id} item={item} />
              )),
          )}
      </div>
    </main>
  );
}

export default NewsPage;
