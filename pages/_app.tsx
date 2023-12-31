import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thailand-RIS - iGEM 2023</title>
        <meta
          name="description"
          content="
        Powering Up Plant Defense: Modification of glutamate-cysteine ligase subcellular localization to
        enhance plant stress response rates through improved
        reactive oxygen species mitigation."
        />
        <link
          rel="icon"
          href="https://static.igem.wiki/teams/4629/wiki/favicon6.png"
        />
      </Head>
      <Navbar />
      <div className="yBox60"></div>

      <Component {...pageProps} />

      <Bottombar />
    </>
  );
}
