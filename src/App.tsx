import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { heroSlider, categorySlider } from "./data/slider";
import Button from "./components/Button";
import MoreCircle from "./CustomIcons/MoreCircle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
      <main className="flex flex-col">
        <section className="">
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
          />
          <Button title="Детальніше" icon={<MoreCircle />} bg width="345px" />
        </section>
        <section>
          <Slider
            slides={categorySlider}
            effect={"slide"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={4}
            spaceBetween={10}
            initialSlide={0}
            arrowNavigation={false}
            gameSlider={true}
          />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
