export default function NavigationListGames() {
  return (
    <div className="pb-[72px] flex">
      <span className="text-[#8F9199] text-sm mr-28">GAMES</span>

      <div className="flex justify-between items-end w-full">
        <span className="text-3xl text-white font-semibold">
          Jogos <br />
          exclusivos
        </span>

        <ul className="flex items-center gap-5 -ml-40">
          <li>
            <img src="/icon-logo.png" alt="Icone da blizzard" />
          </li>
          <li>
            <img src="/switch.png" alt="Icone do Nintendo Switch" />
          </li>
          <li>
            <img src="/xbox.png" alt="Icone da xbox" />
          </li>
          <li>
            <img src="/ps.png" alt="Icone da Playstation" />
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <img src="/more-blue.svg" alt="Icone de ver mais" />
          <a href="#" className="text-[#00AEFF]">
            Ver todos os jogos
          </a>
        </div>
      </div>
    </div>
  );
}
