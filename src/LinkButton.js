import classNames from "classnames/bind";
import React from "react";
import { Glyphicon } from "react-bootstrap";
import styles from "./buttonStyles.module.css";

const cx = classNames.bind(styles);

const LinkButton = () => {
  return (
    <div
      className={cx("buttonWrapper")}
      onClick={e => {
        console.log("Div", e);
      }}
    >
      <button
        className={cx("button")}
        onClick={e => {
          console.log("Button", e);
        }}
      >
        <Glyphicon glyph="link" />
      </button>
    </div>
  );
};

export default LinkButton;
