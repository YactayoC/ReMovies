import type { AppProps } from "next/app";

import { Provider as ProviderRedux } from "react-redux";
import { store } from "store";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderRedux store={store}>
      <Component {...pageProps} />
    </ProviderRedux>
  );
}

export default MyApp;
