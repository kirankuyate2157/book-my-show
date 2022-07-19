// import { Route } from "react-router-dom";

import DefaultHOC from "./HOC/Defalult.HOC";
import Temp from "./components/temp";
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
