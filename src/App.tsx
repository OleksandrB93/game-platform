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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
      <main className="flex flex-col">
        <section className="mt-12">
          <Slider
            slides={heroSlider}
            arrowNavigation={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={50}
            initialSlide={1}
            heroSlider={true}
            title="Hero slider"
          />
          <Button
            title="Детальніше"
            icon={<MoreCircle />}
            bg
            stroke={true}
            width="345px"
          />
        </section>
        <section className="">
          <Slider
            slides={categorySlider}
            effect={"slide"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={4}
            spaceBetween={0}
            initialSlide={0}
            arrowNavigation={false}
            gameSlider={true}
            title="game slider"
          />
        </section>
        <section className="">
          <RecommendedGames
            title="/imgs/recommendedGames/recGame.png"
            games={recommendedGames}
          />
        </section>
        <section>
          <img
            className="mx-auto mb-4"
            src={process.env.PUBLIC_URL + "/imgs/feedback/Відгуки.png"}
            alt=""
          />
          <Slider
            slides={feedbaks}
            effect={"slide"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1.5}
            spaceBetween={8}
            initialSlide={0}
            arrowNavigation={false}
            feedbackSlider={true}
            title="/imgs/feedback/Відгуки.png"
          />
        </section>
        <section>
          <OurContacts />
        </section>
        <section>
          <Letter />
        </section>
        <footer>
          <Footer navLink={NavLink} />
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
