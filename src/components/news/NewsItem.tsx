import React from 'react';
import { INewsItem } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  item: INewsItem;
}

const NewsItem: React.FC<Props> = ({ item }) => {
  return (
    <Link to="news-item" className="group">
      {item.img && (
        <div className="h-[135px] overflow-hidden rounded-t-xl transition-all group-hover:shadow-lg">
          <img src={item.img} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="rounded-b-xl border border-gray-300 px-4 py-3">
        <p className="mb-1 text-xs">{item.date}</p>
        <p className="mb-1 line-clamp-2 text-sm font-bold">{item.title}</p>

        <div className="mb-1 flex flex-wrap gap-3">
          {item.tags && (
            <>
              {item.tags.map((tag) => (
                <p key={tag} className={`${item.colorText} text-xs font-bold`}>
                  {tag}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
