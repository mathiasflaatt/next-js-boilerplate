import React from "react";
import * as styles from "./CenteredMessage.scss";
import { assetBase } from "@lib/util";

type CenteredMessageProps = { title: string; message: string };

export const CenteredMessage: React.FC<CenteredMessageProps> = ({ title, message }) => {
  return (
    <div className={styles.centeredMessage}>
      <div className={styles.alignContainer}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.desc}>
          <h2 className={styles.h2}>{message}</h2>
        </div>
      </div>
      <img src={assetBase("/index_image.svg")} alt="next.js logo" />
    </div>
  );
};
