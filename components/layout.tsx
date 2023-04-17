import Head from "next/head";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Script from "next/script";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />

      <Script
        src="https://embed.zenn.studio/js/listen-embed-event.js"
        strategy="lazyOnload"
      />

      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
