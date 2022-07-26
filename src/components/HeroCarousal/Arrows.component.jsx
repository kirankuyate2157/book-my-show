import React from "react";

export const NextArrow = (props) => {
  // classname
  // styles
  // onclick
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onclick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onclick={props.onClick}
      />
    </>
  );
};
