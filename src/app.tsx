import * as React from "react";
import * as ReactDOM from "react-dom";

import NavBar from "./navbar/navbar";
import Experience from "./experience/experience";


ReactDOM.render(
  <div className="container-fluid">
  	<NavBar/>
    	<Experience/>
  </div>, document.getElementById("root")
);