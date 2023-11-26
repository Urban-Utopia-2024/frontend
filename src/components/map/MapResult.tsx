import { Category } from '../../types';
import MapResultItem from './MapResultItem';

interface Props {
  categories: Category[];
  setMapCenter: React.Dispatch<React.SetStateAction<[number, number]>>;
  setMapZoom: React.Dispatch<React.SetStateAction<number>>;
}

const MapResult: React.FC<Props> = ({
  categories,
  setMapCenter,
  setMapZoom,
}) => {
  const handleClick = (coords: [number, number]) => {
    setMapCenter(coords);
    setMapZoom(15);
  };
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
              onClick={() => handleClick(item.coords)}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default MapResult;
