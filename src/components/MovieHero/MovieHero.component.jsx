import React from "react";

const MovieHero = () => {
  return (
    <>
      <div className="">
        {/* mobile */}
        <div className="md:hidden " style={{ height: "calc(180vw)" }}>
          <div className="w-full h-64 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/black-friday-2022-et00333993-1659017615.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
        {/* medium */}
        <div
          className=" relative hidden md:block w-full lg:hidden"
          style={{ height: "calc(80vw)" }}
        >
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/black-friday-2022-et00333993-1659017615.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
        {/* large */}
        <div className="hidden  w-full lg:block" style={{ height: "30rem" }}>
          <div
            className="absolute z-10 w-full "
            style={{
              height: "30rem",
              backgroundImage:
                "linear-gradient(90deg, rgba(3,2,19,1) 33%, rgba(5,5,24,0.5215219877013305) 87%, rgba(4,3,8,0.9220822117909664) 95%) ",
            }}
          />
          <div className="absolute z-10 w-64 h-96 left-24 top-20">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/black-friday-2022-et00333993-1659017615.jpg"
              alt="Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/black-friday-2022-et00333993-1659017615.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
