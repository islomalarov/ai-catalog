import { FunctionComponent } from 'react';
import { Search } from 'lucide-react';

interface TheSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const TheSearch: FunctionComponent<TheSearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search AI models..."
        className="w-full pl-10 py-2 rounded-xl border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default TheSearch;
