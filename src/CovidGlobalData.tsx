import React from 'react';
import './App.css';

const CovidGlobalData = ({ global }: {global:any}) => {
      return (
      <div>
       

        <div className="globalCases">
            <h2 className="cases">Wszystkie przypadki: <br/> {global.TotalConfirmed}</h2>
            <h2 className="deaths">Zgony: <br/> {global.TotalDeaths}</h2>
            <h2 className="recovery">Ozdrowienia: <br/> {global.TotalRecovered}</h2>
        </div>
       
    </div>);
    };

    export default CovidGlobalData