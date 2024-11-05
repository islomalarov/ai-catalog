'use client';
import { FunctionComponent, useState } from 'react';
import TheSearch from '@/components/SearchComponent/TheSearch';
import TheTabs from '@/components/TabsComponent/TheTabs';
import TheCards from '@/components/CardsComponent/TheCards';

interface TheMainProps {
  catalog: {
    name: string;
    description: string;
    category: string;
    link: string;
  }[];
}

const TheMain: FunctionComponent<TheMainProps> = ({ catalog }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAIs = catalog.filter(
    (ai) =>
      (selectedCategory === 'All' || ai.category === selectedCategory) &&
      (ai.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.category.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="grid gap-3 ">
      <TheSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TheTabs
        catalog={catalog}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TheCards filteredAIs={filteredAIs} />
    </div>
  );
};

export default TheMain;
