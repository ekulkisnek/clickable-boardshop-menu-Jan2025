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
      <div className="relative w-full max-w-[800px] h-[600px] mx-auto">
        {/* Background image with proper styling */}
        <div 
          className="absolute inset-0 bg-[url('https://placehold.co/800x600')] bg-cover bg-center bg-no-repeat"
          style={{ aspectRatio: '4/3' }}
        >
          {/* Customization buttons */}
          <CustomizerButton
            label="Change Deck"
            position={{ top: '200px', left: '300px' }}
            isSelected={selectedOption === 'deck'}
            onClick={() => handleOptionClick('deck')}
          />
          <CustomizerButton
            label="Griptape"
            position={{ top: '250px', left: '300px' }}
            isSelected={selectedOption === 'griptape'}
            onClick={() => handleOptionClick('griptape')}
          />
          <CustomizerButton
            label="Wheel Color"
            position={{ top: '300px', left: '300px' }}
            isSelected={selectedOption === 'wheels'}
            onClick={() => handleOptionClick('wheels')}
          />
          <CustomizerButton
            label="Done"
            position={{ top: '350px', left: '300px' }}
            isSelected={selectedOption === 'done'}
            onClick={() => handleOptionClick('done')}
          />
        </div>
      </div>
    </div>
  );
}
