import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { Transaction } from "./pages";
import { defaultTheme } from "./themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transaction />
    </ThemeProvider>
  );
}
