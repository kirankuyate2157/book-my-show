import React from "react";
import { Route } from "react-router-dom";
//Layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ element: Element, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        element={(props) => (
          <MovieLayout>
            <Element {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovieHOC;
