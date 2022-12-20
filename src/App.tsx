import { Fragment } from "react";
import BannerHomePage from "./components/BannerHomePage";
import Footer from "./components/Footer";
import GameCard from "./components/GamerCard";
import Header from "./components/Header";
import MoreGamesCard from "./components/MoreGamesCard";
import NavigationListGames from "./components/NavigationListGames";
import { games } from "./mocks/games";

function App() {
  return (
    <Fragment>
      {/* <div className="w-full h-[736px] bg-no-repeat bg-cover font-poppins bg-banner"> */}
        <Header />


        <section className="px-[300px] pt-[77px] bg-[#020203] pb-[107px]">
          <NavigationListGames />

          <div className="grid grid-cols-4 gap-4 justify-items-center gap-y-11">
            {games.map((game, index) => {
              if (index >= 7) return <MoreGamesCard />;

              return (
                <GameCard
                  key={index}
                  category={game.category}
                  pathUrl={game.pathUrl}
                  title={game.title}
                />
              );
            })}
          </div>
        </section>

        <Footer />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
