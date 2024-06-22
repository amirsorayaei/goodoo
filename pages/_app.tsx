import type { AppProps } from "next/app";

import "@/src/assets/css/fonts.css";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
