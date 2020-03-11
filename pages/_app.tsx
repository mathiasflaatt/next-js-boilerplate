import React from "react";
import App from "next/app";

import * as styles from "./app.scss";

export default class MyApp extends App<any, any, { user: any }> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.StrictMode>
        <div className={styles.mainContainer}>
          <Component {...pageProps} />
        </div>
      </React.StrictMode>
    );
  }
}
