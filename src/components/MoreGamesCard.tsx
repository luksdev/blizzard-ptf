export default function MoreGamesCard() {
  return (
    <div className="border border-[#212428] rounded-md flex items-center flex-col justify-center w-[301px] h-[412.8px] hover:bg-[#212428] hover:bg-opacity-75 cursor-pointer">
      <img
        src="/logo-blizzard.svg"
        alt="Logo blizzard"
        loading="lazy"
        width={90}
      />
      <div className="flex items-center gap-2 mt-4">
        <img src="/more.svg" alt="Icone de mais items" />
        <span className="text-white text-[15px] font-semibold">
          Ver todos jogos
        </span>
      </div>
    </div>
  );
}
