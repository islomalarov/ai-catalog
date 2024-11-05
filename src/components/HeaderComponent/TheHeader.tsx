import { Bot } from 'lucide-react';
import TheThemeButton from '../ui/ButtonComponent/TheButton';

const TheHeader = () => {
  return (
    <div className=" flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Bot className="mr-2" />
            AI Directory
          </h1>
          <TheThemeButton />
        </div>
      </header>
    </div>
  );
};

export default TheHeader;
