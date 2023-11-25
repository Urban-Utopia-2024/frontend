import {
  GeolocationControl,
  ZoomControl,
  Clusterer,
  Placemark,
  Map,
} from '@pbe/react-yandex-maps';
import React from 'react';
import { CategoryType } from '../../types/enum';

const YandexMap: React.FC<{ category: number[] }> = ({ category }) => {
  const center = [56.8331934833199, 60.61239460156242];

  // Лампочки
  const clusterLightsPoints = [
    [56.92717648238634, 60.4723189179687],
    [56.94069049836607, 60.503904611328075],
    [56.90389081929726, 60.50939777539057],
    [56.8753272036098, 60.62475422070303],
    [56.85652339328523, 60.65633991406241],
    [56.864046056501415, 60.58904865429679],
    [56.8166279143601, 60.58904865429679],
    [56.79402664619225, 60.63986042187493],
  ];

  // Лампочки
  const clusterPapperPoints = [
    [56.91475682641906, 60.810056467489325],
    [56.92452070401849, 60.768857737020596],
    [56.90536606391161, 60.76679780049714],
    [56.89146338294681, 60.80593659444246],
    [56.92865080333074, 60.80936982198154],
  ];

  // Стекло
  const clusterGlassPoints = [
    [56.79572221592087, 60.5732558076171],
    [56.803633856940095, 60.60003498242182],
    [56.796475777759575, 60.585615426757755],
    [56.79534542929986, 60.58973529980462],
    [56.875515193779385, 60.61239460156242],
    [56.8726677210607, 60.6473214821378],
    [56.887705009737, 60.64182831807526],
  ];

  const renderPlacemarks = (
    points: number[][],
    preset: string,
    iconPreset: string,
  ) => (
    <Clusterer options={{ preset }}>
      {points.map((coordinates, index) => (
        <Placemark
          key={index}
          geometry={coordinates}
          options={{
            preset: iconPreset,
            // iconContentLayout: {},
          }}
        />
      ))}
    </Clusterer>
  );

  return (
    <div className="h-[300px] w-full overflow-hidden rounded-b-xl lg:h-full lg:rounded-b-none lg:rounded-r-xl">
      <Map width="100%" height="100%" defaultState={{ center, zoom: 9 }}>
        <GeolocationControl options={{ float: 'right' }} />
        <ZoomControl options={{ position: { right: 10, bottom: 40 } }} />
        {category.includes(CategoryType.WORK) &&
          renderPlacemarks(
            clusterLightsPoints,
            'islands#invertedVioletClusterIcons',
            'islands#violetIcon',
          )}

        {category.includes(CategoryType.INCIDENT) &&
          renderPlacemarks(
            clusterPapperPoints,
            'islands#invertedBlueClusterIcons',
            'islands#blueIcon',
          )}

        {category.includes(CategoryType.EVENT) &&
          renderPlacemarks(
            clusterGlassPoints,
            'islands#invertedRedClusterIcons',
            'islands#redIcon',
          )}
      </Map>
    </div>
  );
};

export default YandexMap;
