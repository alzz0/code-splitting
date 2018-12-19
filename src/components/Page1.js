import React from "react"
import logo from "../logo.svg"
const Page1 =({onRouteChange})=>{
    return(
    <div>
        <h1>Page 1</h1>
        <button onClick={()=>onRouteChange("page2")}>page2</button>
        <button onClick={()=>onRouteChange("page3")}>page3</button>
        </div>
    )
}
export default Page1