import { FunctionComponent, useMemo } from 'react';

interface TheTabsProps {
  catalog: { category: string }[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const TheTabs: FunctionComponent<TheTabsProps> = ({
  catalog,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = useMemo(() => {
    const uniqueCategories = new Set(catalog.map((ai) => ai.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [catalog]);

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      {categories.map((category: string) => (
        <button
          key={category}
          className={`block px-3 py-2 rounded-xl transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-gray-300 text-black dark:bg-white-700'
              : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white'
          }`}
          onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default TheTabs;
