import * as React from "react";
import data from "../profileData";

class NavBar extends React.Component<null, {}> {
  render() {
    return <div className="row intro-wrapper">
    	<div className="col-sm-5">
    		<div className="colorBlock "></div>
    		<h3 className="col-12">{data.name}</h3>
    		<div className="col-12 prof colorText">{data.prof}</div>
    		<div className="col-12 text-justify">{data.description}</div>
    	</div>
    	<div className="col-sm-2 text-center">
    		<img className="img-fluid image" src="/src/navbar/prof.jpg" />
    	</div>
    	<div className="col-sm-5 text-right details-wrapper">
    		{data.details.map((detail: any, ind:number)=><div className="detail" id="{detail.field}">{detail.value} </div>)}
    	</div>	
    </div>;
  }
}


export default NavBar;