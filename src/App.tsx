import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { heroSlider, categorySlider } from "./data/slider";
import Button from "./components/Button";
import MoreCircle from "./CustomIcons/MoreCircle";
import RecommendedGames from "./components/RecommendedGames";
import { recommendedGames } from "./data/recomendedGames";
import { feedbaks } from "./data/feedback";
import OurContacts from "./components/OurContacts";
import Letter from "./components/Letter";
import Footer from "./components/Footer";
import { NavLink } from "./data/navLink";

import {
  categorySliderBreackpoints,
  feedbackSliderBreackpoints,
  heroSliderBreackpoints,
} from "./configs/sliderConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header navLink={NavLink} />
      <main className="flex flex-col bg-bgPrimary">
        <section className="mt-12">
          <Slider
            slides={heroSlider}
            arrowNavigation={true}
            effect={"coverflow"}
            heroSlider={true}
            title="Hero slider"
            breackpoints={heroSliderBreackpoints}
          />
          <div className="mt-4 lg:hidden">
            <Button
              title="Детальніше"
              icon={<MoreCircle />}
              bg
              stroke={true}
              width="345px"
            />
          </div>
        </section>
        <section className="">
          <Slider
            effect={"slide"}
            slides={categorySlider}
            gameSlider={true}
            title="game slider"
            breackpoints={categorySliderBreackpoints} 
          />
        </section>
        <section className="">
          <RecommendedGames games={recommendedGames} />
        </section>
        <section>
          <img
            className="mx-auto mb-4 lg:hidden"
            src={process.env.PUBLIC_URL + "/imgs/feedback/Відгуки.png"}
            alt=""
          />
          <Slider
            slides={feedbaks}
            effect={"slide"}
            arrowNavigation={false}
            feedbackSlider={true}
            title="/imgs/feedback/Відгуки.png"
            breackpoints={feedbackSliderBreackpoints} 
          />
        </section>
        <section className="lg:flex gap-x-8">
          <OurContacts />
          <Letter />
        </section>
      </main>
      <footer>
        <Footer navLink={NavLink} />
      </footer>
    </ThemeProvider>
  );
}

export default App;
