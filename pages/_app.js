import Head from "next/head";
import { Grommet, Main } from "grommet";
import "react-multi-carousel/lib/styles.css";

//files
import AppBar from "../components/layout/header/AppBar";
import theme from "../util/theme";
import Footer from "../components/layout/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} full>
      <Head>
        <meta name="theme-color" content="#796E62" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caladea:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Jardin la Cascade</title>
      </Head>
      <AppBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            overflow-x: hidden;
          }
          body {
            margin: 0;
            height: 100%;
          }
          main {
            min-height: 80vh;
          }
        `}
      </style>
    </Grommet>
  );
}

export default MyApp;
