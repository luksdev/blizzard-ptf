interface GameCardProps {
  pathUrl: string;
  title: string;
  category: string;
}

export default function GameCard({ pathUrl, title, category }: GameCardProps) {
  return (
    <div>
      <img
        src={pathUrl}
        alt="Imagem do jogo Diablo"
        className="rounded-md cursor-pointer"
      />

      <div className="mt-[18px]">
        <span className="text-white text-[19.35px] font-semibold block cursor-pointer">
          {title}
        </span>
        <span className="text-[#E5E5E5] opacity-80 font-normal text-[15.05px] cursor-pointer">
          {category}
        </span>
      </div>
    </div>
  );
}
