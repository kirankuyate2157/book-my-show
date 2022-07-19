import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";
//layouts
const DefaultHOC = ({ component: Component, ...props }) => {
  // component
  // path
  //exact
  return (
    <>
      <Route
        {...props}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
