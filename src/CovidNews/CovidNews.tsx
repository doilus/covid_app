import React from 'react'; // get the React object from the react module
import './CovidNewsCs.css';
import CovidGlobalData from './CovidGlobalData';
import CovidNewsDate from './CovidNewsDate';
import CovidNewsTable from './CovidNewsTable';
import CovidNewsChart from './CovidNewsChart';

import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class CovidNews extends React.Component {

	state = {
        cases: [],
        global: {},
        date: Date,

      }

	 componentDidMount() {
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then((data) => {
          this.setState({ cases: data.Countries })
          this.setState({ global: data.Global})
          this.setState({ date: data.Date})		
        })

        .catch(console.log)
      }
	
	


	render() {
	
		return(
      <body>

        <CovidNewsDate date = {this.state.date} />
        
        <div className="covid-global-data">
          <CovidGlobalData global = {this.state.global}/>
        </div>
        <div className="space-between-charts"></div>
		    
        <CovidNewsChart cases =  {this.state.cases} />
        <div className="space-between-charts"></div>
        <CovidNewsTable cases = {this.state.cases}  />


        <div className="footer">
                      <div className="footerTop">
                          CONTENT MANAGEMENT SYSTEM - PJATK
                      </div>
          
                      <div className="footerBottom">
                          <div className="footerBottomLeft">
                              <a href="link1.html" className="footerOption"> LINK1 </a><div className="pStyle3"></div>
                              <a href="link2.html" className="footerOption"> LINK2 </a><div className="pStyle3"></div>
                              <a href="link3.html" className="footerOption"> LINK3 </a><div className="pStyle3"></div>
                              <a href="link4.html" className="footerOption"> LINK4 </a><div className="pStyle3"></div>
                          </div>
                          <div className="footerBottomRight">
                              DOMINIKA ŁUGOWSKA <div className="pStyle3"></div>
                              MICHELLE HEROK <div className="pStyle3"></div>
                              DAMIAN GORAJ <div className="pStyle3"></div>
                              MARCIN CHOJNACKI
                          </div>
                      </div>
          
                  </div>
          

        </body>)
	}
}


export default CovidNews; // expose the CovidNews component to other modules