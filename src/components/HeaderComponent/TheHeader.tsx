// import { Bot } from 'lucide-react';
import TheThemeButton from '../ui/ButtonComponent/TheButton';

const TheHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="  flex items-center gap-5">
        <h1 className="text-2xl font-bold flex items-center">
          {/* <Bot className="mr-2" /> */}
          Sun&apos;iy Intellekt saytlar katalogi
        </h1>
        <TheThemeButton />
      </div>
    </header>
  );
};

export default TheHeader;
