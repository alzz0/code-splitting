import React from "react";
import logPage3o from "../logo.svg";
const Page3 = ({ onRouteChange }) => {
  return (
    <div>
      <h1>Page 3</h1>
      <button onClick={() => onRouteChange("page1")}>page1</button>
      <button onClick={() => onRouteChange("page2")}>page2</button>
    </div>
  );
};
export default Page3;
