import { sciencetraining } from "@/constants/ScienceTraining";
import { useState } from "react";

export default function FlipCards({data, columns = 4}: {data:any[], columns?:Number}) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="">
      <div className="max-w-8xl mx-auto py-24">
        <div 
          className={`grid grid-cols-1 sm:grid-cols-${columns} gap-8`}
          onMouseLeave={() => setActiveCard(null)}
        >
          {data.map((training, index) => (
            <FlipCard 
              
              key={index} 
              title={training.title} 
              description={training.description}
              color={training.color}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FlipCard({ 
  title, 
  description, 
  color,
  isActive, 
  onHover, 
  onClick 
}: { 
  title: string; 
  description: string; 
  color: string;
  isActive: boolean; 
  onHover: () => void; 
  onClick: () => void; 
}) {
  return (
    <div
      className="w-full h-64 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isActive ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 flex items-center justify-center shadow-lg rounded-2xl p-2"
          style={{ 
            backfaceVisibility: "hidden",
            backgroundColor: color,  
          }}
        >
          <h2 className="text-center font-bold text-lg text-gray-800 leading-tight">
            {title}
          </h2>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 flex items-center justify-center shadow-lg rounded-2xl p-6 bg-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-base  xl:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
