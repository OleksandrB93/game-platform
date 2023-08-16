import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { heroSlider } from "./data/slider";
import Button from "./components/Button";
import MoreCircle from "./CustomIcons/MoreCircle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
      <main className="flex flex-col">
        <Slider slides={heroSlider} />
        <Button title="Детальніше" icon={<MoreCircle />} bg width="345"/>
      </main>
    </ThemeProvider>
  );
}

export default App;
