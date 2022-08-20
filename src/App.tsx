import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { Transactions } from "./pages/Transactions";
import { defaultTheme } from "./themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
