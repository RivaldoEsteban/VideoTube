import React, { createContext, Fragment, useState } from "react";
import Head from "next/head";
import "../styles/globals.css";

export const Context = createContext();

function MyApp({ Component, pageProps }) {
  const [videoList, setVideoList] = useState([]);
  return (
    <Fragment>
      <Head>
        <title>VideoTube | Rivaldo Esteban portafolio</title>
      </Head>
      <Context.Provider value={{ value: videoList, setVideoList }}>
        <Component {...pageProps} />
      </Context.Provider>
    </Fragment>
  );
}

export default MyApp;
