import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
          content="Designed by Miu. Programmed by Thamognya Kodi, Dhirath (Kaka) Thanglerdsumpan, Settachai (Jacky) Lertwasana, Maera Singh,"
        />
        <link
          rel="icon"
          href="https://static.igem.wiki/teams/4629/wiki/favicon6.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
