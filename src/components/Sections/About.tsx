import { ChevronDownIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { FC, memo, useState } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSendRequest = () => {
    setIsLoading(true);

    const url = `https://asia-east2-hip-graph-388614.cloudfunctions.net/poe-try?prompt=${encodeURIComponent(text)}`;
    console.log(url);
    // Perform the GET request using the URL
    // You can use libraries like axios or fetch to make the request

    // Example using fetch:
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        setResponse(data); // Store the response
        setIsLoading(false);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        setResponse("Data Fetching Failed...");
        setIsLoading(false);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const { name, description, actions } = heroData;

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-filter backdrop-blur-sm backdrop-opacity-90">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({ href, Icon, primary, text }) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
            <div className="flex items-center w-full">
              <textarea
                className="bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm w-full justify-center"
                onChange={handleInputChange}
                placeholder="Enter your text here..."
                rows={1}
                value={text}
              ></textarea>
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
                onClick={handleSendRequest}
              >
                Send
              </button>
            </div>
            <div className="bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm w-full justify-center">
              {isLoading && <p>Loading...</p>}
              {!isLoading && response && <p>{response}</p>}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Resume}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
