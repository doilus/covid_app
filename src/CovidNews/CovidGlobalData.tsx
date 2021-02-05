import React from 'react';
import './CovidNewsCs.css';


const CovidGlobalData = ({ global }: {global:any}) => {
    

    var globalCase= "" +  global.TotalConfirmed;
    globalCase = numberWithSpaces(globalCase);

    var globalDea = "" +  global.TotalDeaths;
    globalDea = numberWithSpaces(globalDea);

    var globalReco = "" +  global.TotalRecovered;
    globalReco = numberWithSpaces(globalReco);
      return (
      <div>
       
        <div className="globalCases">
            <img className="imageCases" src="iconsCovidNews/icon_cases.png" alt="Icons_cases"/>
            <h2 className="cases"><span className="font-zarazenia">ZARAZENIA: </span></h2>
            <h2 className="casesName"><span className="font-number"> {globalCase} </span></h2>
            <img className="imageDeath" src="iconsCovidNews/icon_deaths.png" alt="Icons_cases"/>
            <h2 className="deaths"><span className="font-zgon">ZGONY: </span></h2>
            <h2 className="deathsName"><span className="font-number">{globalDea}</span></h2>
            <img className="imageRecovery" src="iconsCovidNews/icon_recovery.png" alt="Icons_cases"/>
            <h2 className="recovery"><span className="font-ozdrowienia">OZDROWIENIA:</span></h2>
            <h2 className="recoveryName"><span className="font-number">{globalReco}</span></h2>
        </div>
    <br/>
    </div>);
    };

    function numberWithSpaces(x:any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}   



export default CovidGlobalData