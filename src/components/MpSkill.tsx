import Image from "next/image";

interface MpSkillProps {
  value   : number;
  name    : string;
  imageUrl: string;
}

const MAX = 630;

export function MpSkill({ name, value, imageUrl }: MpSkillProps) {
  const x = (MAX * value) / 100;

  return (
    <div className="flex flex-col items-center">
      <div title={`${name} - ${value}%`}>
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          <circle
            cx="150"
            cy="150"
            r="100"
            fill="transparent"
            stroke="white"
            strokeWidth={10}
            strokeDasharray={"3 8"}
          />
          <circle
            cx="150"
            cy="150"
            r="100"
            className="animate-strokeSpin"
            stroke="white"
            strokeWidth={10}
            strokeDasharray={`${x} ${MAX - x}`}
            strokeDashoffset={158}
            fill="transparent"
          />

          <foreignObject
            x="100"
            y="100"
            width="100"
            height="100"
            className="pointer-events-none"
          >
            <div>
              <Image 
                src={imageUrl} 
                alt={`${name} logo`} 
                width={100} 
                height={100} 
              />
            </div>
          </foreignObject>
        </svg>

        <h5 className="relative -top-3">{name}</h5>
      </div>
    </div>
  );
}
