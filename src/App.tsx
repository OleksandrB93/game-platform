import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { heroSlider,categorySlider } from "./data/slider";
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
          <Slider slides={heroSlider} />
          <Button title="Детальніше" icon={<MoreCircle />} bg width="345" />
        </section>
        <section>
          <Slider slides={categorySlider} disableCoverFlow/>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
