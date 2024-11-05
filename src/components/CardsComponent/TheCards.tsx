import { Link2 } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface TheCardsProps {
  filteredAIs: {
    name: string;
    category: string;
    description: string;
    link: string;
  }[];
}

const TheCards: FunctionComponent<TheCardsProps> = ({ filteredAIs }) => {
  return (
    <div>
      {filteredAIs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAIs.map((ai, index) => (
            <div
              key={index}
              className=" p-5 rounded-xl flex flex-col gap-10 text-black dark:text-white transition-colors duration-200 border border-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700">
              <div>
                <h2 className="text-2xl font-bold">{ai.name}</h2>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{ai.category}</p>
              </div>
              <div className="">
                <p>{ai.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Link2 />
                <Link
                  target="_blank"
                  href={ai.link}
                  className="text-blue-500 dark:text-blue-300 hover:underline">
                  {ai.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          <p>No AI models found matching your search and selected category.</p>
        </div>
      )}
    </div>
  );
};

export default TheCards;
