import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section  sectionId={SectionId.Portfolio}>
      <div className="relative">
        <div className="absolute top-[-50px] bottom-[-50px] left-[-50px] right-[-50px] bg-neutral-900 opacity-60 blur-md gap-y-6 rounded-xl"></div>
          <div className="relative flex flex-col divide-y-2 divide-neutral-300">
            <div className="flex flex-col gap-y-8">
            <h2 className="self-center text-xl font-bold text-white">Portfolio</h2>
            <div className=" w-full columns-2 md:columns-3 lg:columns-3">
              {portfolioItems.map((item, index) => {
                const {title, image} = item;
                return (
                  <div className="pb-6" key={`${title}-${index}`}>
                    <div
                      className={classNames(
                        'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                      )}>
                      <Image alt={title} layout="responsive" src={image} />
                      <ItemOverlay item={item} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, skills}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  const handleClick = () => {
    if (url == "#portfolio") {
      alert('Confidentail Work Project');
    }
  }

  return (
    <div >
      <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
      <a
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        href={url}
        onClick={handleItemClick}
        ref={linkRef}>

        <div className="relative h-full w-full p-4" onClick={handleClick}>
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
            <p className="text-xs text-white font-bold opacity-100 sm:text-sm">{skills}</p>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
          {url && <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />}
        </div>

      </a>
    </div>
  );
});
