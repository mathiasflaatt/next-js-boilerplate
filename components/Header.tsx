import React from "react";
import Head from "next/head";
import { assetBase } from "@lib/util";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href={assetBase("favicon.ico")} rel="shortcut icon" />
      <link href={assetBase("bootstrap.min.css")} type="text/css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Serif&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
    </Head>
  );
};

export default Header;
