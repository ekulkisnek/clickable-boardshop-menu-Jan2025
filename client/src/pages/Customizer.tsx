import { useState } from 'react';
import { CustomizerButton } from '@/components/ui/customizer-button';

export function Customizer() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    // Future implementation of actual customization logic
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="relative w-full max-w-[800px] aspect-[4/3] mx-auto">
        {/* Background image container with responsive sizing */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain md:bg-cover"
          style={{ 
            backgroundImage: `url(${new URL('../assets/IMG_6881.jpeg', import.meta.url).href})`,
          }}
        >
          {/* Customization buttons with responsive positioning */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:block">
            <CustomizerButton
              label="Change Deck"
              position={{ top: '33%', left: '37.5%' }}
              isSelected={selectedOption === 'deck'}
              onClick={() => handleOptionClick('deck')}
            />
            <CustomizerButton
              label="Griptape"
              position={{ top: '41.5%', left: '37.5%' }}
              isSelected={selectedOption === 'griptape'}
              onClick={() => handleOptionClick('griptape')}
            />
            <CustomizerButton
              label="Wheel Color"
              position={{ top: '50%', left: '37.5%' }}
              isSelected={selectedOption === 'wheels'}
              onClick={() => handleOptionClick('wheels')}
            />
            <CustomizerButton
              label="Done"
              position={{ top: '58.5%', left: '37.5%' }}
              isSelected={selectedOption === 'done'}
              onClick={() => handleOptionClick('done')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}