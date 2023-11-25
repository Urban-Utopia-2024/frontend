import React from 'react';

interface Props {
  title: string;
  colorText?: string;
  tags?: string[];
  catagory?: string;
  description?: string;
}

const MapResultItem: React.FC<Props> = ({
  title,
  tags,
  catagory,
  colorText = 'text-amber-500',
  description,
}) => {
  return (
    <button className="border-g-200 flex flex-col border-b border-t bg-transparent p-4">
      <div className="mb-1 flex flex-wrap gap-3">
        {tags && (
          <>
            {tags.map((tag) => (
              <p key={tag} className={`${colorText} text-xs font-bold`}>
                {tag}
              </p>
            ))}
          </>
        )}

        {catagory && (
          <p className="text-xs font-bold text-gray-500">{catagory}</p>
        )}
      </div>

      <p className="mb-1 truncate text-sm font-bold">{title}</p>

      {description && <p className="text-sm">{description}</p>}
    </button>
  );
};

export default MapResultItem;
