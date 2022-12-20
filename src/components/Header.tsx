import { useState } from "react";
import { DropdownGamesItems } from "../mocks/dropdown-games";
import BannerHomePage from "./BannerHomePage";

function DropdownGames() {
  return (
    <div className="absolute w-full  mt-[2px] h-[525px] top-[95px] left-0 bg-[#0C0C0D] border-white border border-opacity-10">
      <div className="px-[350px]">
        <div className="grid grid-cols-6 gap-4 mt-[72px] justify-items-center gap-y-[92px]">
          {DropdownGamesItems.map((item, index) => {
            return (
              <div className="flex flex-col items-center">
                <img src={item.pathUrl} alt={item.title} />
                <span className="text-[#8F9199] text-sm mt-2">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="bottom-0 absolute bg-[#15171B] w-full h-[70px] flex items-center justify-center gap-14">
        <div className="flex items-center gap-3">
          <img src="/more-blue.svg" alt="Icone de mais items" />
          <a href="#" className="text-white font-semibold">
            Ver todos os jogos
          </a>
        </div>
        <div className="flex items-center gap-3">
          <img src="/icon-logo-blue.svg" alt="Icone de mais items" />
          <a href="#" className="text-white font-semibold">
            Aplicativo Battle.net
          </a>
        </div>
        <div className="flex items-center gap-3">
          <img src="/icon-downloads.svg" alt="Icone de mais items" />
          <a href="#" className="text-white font-semibold">
            Downloads
          </a>
        </div>
        <div className="flex items-center gap-3">
          <img src="/icon-chat.svg" alt="Icone de mais items" />
          <a href="#" className="text-white font-semibold">
            Fóruns dos jogos
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function Header() {
  const [isDropdownGamesOpen, setIsDropdownGamesOpen] = useState(false);

  return (
    <div className="bg-banner">
      <nav
        className={`px-[300px] pt-[25px] flex items-center ${
          isDropdownGamesOpen ? "bg-[#0C0C0D]" : ""
        } justify-between z-10 border-white border-b-2 border-opacity-10 pb-7`}
      >
        <img src="/logo-blizzard.svg" alt="Logo blizzard" loading="lazy" />

        <div className="absolute left-0 px-[300px] top-[95px]">
          <div className="h-[2px] w-[43px] bg-[#00AEFF]" />
        </div>

        <ul className="text-white flex items-center gap-8">
          <li
            className="flex gap-2 cursor-pointer"
            onClick={() => setIsDropdownGamesOpen(!isDropdownGamesOpen)}
          >
            Jogos
            <img
              src="/arrow-down.svg"
              alt="Seta par abaixo"
              className={`${isDropdownGamesOpen ? "transform rotate-180" : ""}`}
            />
          </li>
          <li className="flex gap-2 cursor-pointer">
            Esportes
            <img src="/arrow-down.svg" alt="Seta par abaixo" />
          </li>
          <li>Loja</li>
          <li>Notícias</li>
          <li>Suporte</li>
        </ul>

        <div className="text-white text-sm flex gap-4">
          <button className="w-[112px]" disabled></button>
          <button className="w-[112px]" disabled></button>
        </div>

        <div className="text-white text-sm gap-4 flex">
          <button className="py-[10px] px-4 border-white border rounded-[3.15px]">
            Criar conta
          </button>
          <button className="py-[10px] px-[25px] bg-[#00AEFF] rounded-[3.15px]">
            Logar
          </button>
        </div>

        {isDropdownGamesOpen && <DropdownGames />}
      </nav>
      <BannerHomePage />
    </div>
  );
}
