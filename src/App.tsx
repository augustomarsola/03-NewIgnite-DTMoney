import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { defaultTheme } from "./themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello</h1>
      </div>
    </ThemeProvider>
  );
}
