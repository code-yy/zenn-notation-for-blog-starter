import { AppProps } from "next/app";
import "zenn-content-css";
import "../styles/index.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
