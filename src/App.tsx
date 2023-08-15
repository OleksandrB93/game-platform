import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ border: "1px solid teal" }}>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
