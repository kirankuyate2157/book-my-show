import React from "react";

const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-2 ">
        <div className="h-70">
          <img
            src={props.src}
            alt={props.title}
            className="w-full rounded-xl h-full"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm  ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
