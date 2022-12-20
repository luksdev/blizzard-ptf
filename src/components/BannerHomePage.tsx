export default function BannerHomePage() {
  return (
    <main className="pt-[77px] px-[300px] flex items-center text-white justify-between">
      <img src="/slider.png" alt="Slide de jogos" />

      <div className="flex w-[562px] flex-col">
        <span className="text-[64px] w-[562px] font-bold leading-none">
          Retorne à escuridão com o game Diablo IV
        </span>
        <span className="text-white mt-5">
          O retorno de Lilith traz uma era de escuridão e sofrimento
        </span>

        <button className="py-[10px] px-[25px] w-[168px] bg-[#00AEFF] rounded-[3.15px] mt-[32px]">
          Jogue agora
        </button>
      </div>

      <div className="flex flex-col justify-between items-center">
        <img src="/diablo-logo.png" alt="Logo do jogo diablo" />

        <div className="mt-[148px] flex flex-col items-end">
          <span className="pr-4 pb-4 text-[13px] font-bold">
            ASSISTA O TRAILER
          </span>
          <img
            src="video-preview.png"
            alt="Video preview do jogo diablo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </main>
  );
}
