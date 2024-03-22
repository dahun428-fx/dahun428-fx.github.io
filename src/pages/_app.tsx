import Head from "next/head";
import { AppPropsWithLayout } from "../types/types";
import { AppProps } from "next/app";
import { Standard } from "@/layouts/standard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Standard;

  return (
    <>
      <Head>
        <title>example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
