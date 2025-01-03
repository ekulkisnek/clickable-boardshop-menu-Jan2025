import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CustomizerButtonProps {
  label: string;
  position: {
    top: string;
    left: string;
  };
  isSelected?: boolean;
  onClick: () => void;
}

export function CustomizerButton({
  label,
  position,
  isSelected,
  onClick,
}: CustomizerButtonProps) {
  return (
    <Button
      className={cn(
        "absolute w-[100px] bg-black/50 hover:bg-black/70 text-white border-none",
        "transition-colors duration-200",
        isSelected && "bg-black/70"
      )}
      style={{
        top: position.top,
        left: position.left,
        fontSize: '14px',
        padding: '5px 10px',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
