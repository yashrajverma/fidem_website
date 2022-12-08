import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          src="//unpkg.com/satellite.js/dist/satellite.min.js"
          async
        ></script>
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"></script>
        <title>Fidem</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
