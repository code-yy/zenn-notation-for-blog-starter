import { AppProps } from "next/app";
import "zenn-content-css";
import "../styles/index.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるようにします
  }, []);

  return <Component {...pageProps} />;
}
