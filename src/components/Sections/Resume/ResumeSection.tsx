import {FC, memo, PropsWithChildren, useState} from 'react';

interface ResumeSectionProps {
  title: string;
  children: Array<any>;
}

const ResumeSection: FC<PropsWithChildren<ResumeSectionProps>> = memo(({title, children}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-2">
      <div className="col-span-1 relative md:flex md:justify-start">
        <div className="w-6 h-6 rounded-full white absolute top-1/2 -mt-3 md:hidden" />
        <div className="hidden w-6 h-6 rounded-full teal-500 absolute top-1/2 -mt-3 md:block animate-pulse" />
        <div className="ml-8 md:ml-0">
          <h2 className="text-2xl font-bold uppercase text-neutral-300">{title}</h2>
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-1">
        {expanded ? children : children.slice(0, 1)}
        {children.length > 1 && (
          <button
            className="text-blue-500 hover:underline mt-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;