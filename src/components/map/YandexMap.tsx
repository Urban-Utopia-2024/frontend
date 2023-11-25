import {
  GeolocationControl,
  ZoomControl,
  Clusterer,
  Placemark,
  Map,
} from '@pbe/react-yandex-maps';
import React from 'react';
import { Category, EventMap } from '../../types';

const RenderPlacemarks: React.FC<{
  items: EventMap[];
  preset: string;
  marker: string;
}> = ({ items, preset, marker }) => {
  return (
    <Clusterer options={{ preset }}>
      {items.map((item) => (
        <Placemark
          key={item.id}
          geometry={item.coords}
          options={{
            iconLayout: 'default#image',
            iconImageHref: `/img/markers/${marker}.png`,
          }}
        />
      ))}
    </Clusterer>
  );
};

const YandexMap: React.FC<{
  categories: Category[];
  mapCenter?: [number, number];
  mapZoom?: number;
}> = ({ categories, mapCenter, mapZoom }) => {
  return (
    <div className="h-[300px] w-full overflow-hidden rounded-b-xl lg:h-full lg:rounded-b-none lg:rounded-r-xl">
      <Map
        width="100%"
        height="100%"
        state={{ center: mapCenter, zoom: mapZoom }}
      >
        <GeolocationControl options={{ float: 'right' }} />
        <ZoomControl options={{ position: { right: 10, bottom: 40 } }} />
        {categories.map((category) => (
          <RenderPlacemarks
            items={category.items}
            preset={category.preset}
            marker={category.marker}
          />
        ))}
      </Map>
    </div>
  );
};

export default YandexMap;
