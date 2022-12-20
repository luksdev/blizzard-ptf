export default function Footer() {
  return (
    <footer className="pl-[300px] pr-[50px] h-[852px] bg-footer bg-no-repeat bg-cover bg-[#07070A] flex justify-between">
      <div className="pt-[132px]">
        <img src="/logo.svg" alt="Logo da BattleNet" />

        <div className="my-8">
          <span className="text-white font-bold text-3xl">
            Baixe agora o battle.net
          </span>
        </div>

        <div className="flex flex-col gap-5 text-[#828792]">
          <div className="flex items-center gap-4">
            <img src="/check.svg" alt="Icone de check" />
            <span className="text-[18px]">Seus jogos em um só lugar</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/more-friends.svg" alt="Icone de conectar aos amigos" />
            <span className="text-[18px]">Conecte-se aos seus amigos</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/buy.svg" alt="Icone de fazer compra (buy)" />
            <span className="text-[18px]">Compre jogos e itens digitais</span>
          </div>
        </div>

        <img
          src="/button-mac.svg"
          alt="Botao para baixar para sistema MacOs"
          className="my-[32px] cursor-pointer"
        />

        <div className="flex items-center gap-4">
          <img src="/mobile.svg" alt="Icone de smartphone" />
          <span className="font-semibold text-[#E5E5E5] text-sm">
            Também disponível como <br /> aplicativo móvel
          </span>
        </div>
      </div>

      <div className="relative">
        <img
          src="/bg-image-footer-2.png"
          alt="Image do sistema da battlenet 2"
          className="absolute bottom-32 left-72"
        />
        <img
          src="/bg-image-footer-1.png"
          alt="Imagem do sistema da battlenet"
        />
      </div>
    </footer>
  );
}
