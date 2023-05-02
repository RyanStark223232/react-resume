import { FC, memo } from 'react';

import { TimelineItem } from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItem }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-3xl font-bold text-white tracking-wider">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none text-gray-400">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none text-gray-400">{date}</span>
        </div>
      </div>
      <span className = "text-cyan-600">{content}</span>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

export default TimelineItem;