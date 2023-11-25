import { Category } from '../../types';
import MapResultItem from './MapResultItem';

const MapResult: React.FC<{
  categories: Category[];
}> = ({ categories }) => {
  return (
    <div>
      <p className="mb-2 ml-4 text-base">
        {categories.reduce(
          (count, category) => count + category.items.length,
          0,
        )}{' '}
        результатов
      </p>
      <div className="flex max-h-[450px] flex-col overflow-y-auto">
        {categories.map((category) =>
          category.items.map((item) => (
            <MapResultItem
              key={item.id}
              title={item.title}
              tags={item.tags}
              category={item.category}
              description={item.description}
              colorText={item.colorText}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default MapResult;
