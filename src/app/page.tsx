import TheMain from '@/components/MainComponent/TheMain';
import { createClient } from '@/utils/supabase/server';
interface CatalogItem {
  name: string;
  description: string;
  category: string;
  link: string;
}

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('catalog').select('*');

  const catalog = data as CatalogItem[] | null;

  if (error) {
    throw new Error(`Error fetching catalog data: ${error.message}`);
  }
  if (!catalog) {
    throw new Error('Catalog data is null');
  }
  return <TheMain catalog={catalog} />;
}
