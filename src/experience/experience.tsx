import * as React from "react";
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';

// Initialize exporting module.
Exporting(Highcharts);

import data from "../profileData";

class Experience extends React.Component<null, {}> {
componentDidMount(){
	if (this.props.modules) {
	            this.props.modules.forEach(function (module) { module(Highcharts);});
	}

	this.chart = new Highcharts.Chart({
		chart: {
			renderTo: document.getElementById("charts"),
			type: 'bar',
			marginLeft: 100
		},
		title: {
			text: "",
			align: 'left',
			x: 90
		},
		xAxis: {
			categories: data.skills.skills
		},
		credits:{
			enabled: false
		},
		yAxis: {
			allowDecimals: false,
			title: {
				text: null
			},
			min: 0,
			max: 10
		},
		legend: {
			enabled: false
		},
		series: [data.skills],
		colors: ["#374458"]
	});
		
},
    componentWillUnmount() {
        this.chart.destroy();
    },
  render() {
  	var works= data.works.map((work: any, ind: number) =>{
  		return <li key="{ind + 1}" className="companies-wrapper col-12">
	    			<span className="colorText">{work.period}</span>
	    			<span className="colorText float-right">{work.location}</span>
	    			<h5>{work.company}</h5>
	    			<div>{work.description}</div>
    			</li>
  	});
    return <div className="row experience-wrapper">
	    	<div className="col-6">
	    		<h4 className="col-12">Work Experience</h4>
	    		<ul className="companies-list col-12">{works}</ul>
	    	</div>
	    	<div className="col-6">
	    		<div className="col-12" id="charts"></div>
	    	</div>
    	</div>;
  }
}


export default Experience;