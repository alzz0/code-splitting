import React from "react";
import logo from "../logo.svg";
const Page2 = ({onRouteChange}) => {
  return (
    <div>
       <h1>Page 2</h1>
      <button onClick={() => onRouteChange("page1")}>page1</button>
      <button onClick={() => onRouteChange("page3")}>page3</button>
    </div>
  );
};
export default Page2;
