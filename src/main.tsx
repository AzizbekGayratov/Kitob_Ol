import App from "./App.tsx";
import "assets/css/index.css";
import { Provider } from "react-redux";
import { store } from "Store/index.ts";
import { createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attempIndex) => Math.min(1000 * 2 ** attempIndex, 30000),
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {};
  }

  interface ThemeOptions {
    status?: {};
  }
}

const theme = createTheme({
  status: {},
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
