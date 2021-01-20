import React from 'react';
import './App.css';

const CovidNewsTable= ({ cases }: {cases:any}) => {
      return (
    <div>
        <div className="tableSearch">
             <h2 className ="reportedCases">Odnotowane przypadki w poszczególnych krajach:</h2>
             
        </div>
        
        <table className="tableCases" id="myTable">
            <tr>
                <th>Kod</th>
                <th>Kraj</th>
                <th>Nowe przypadki</th>
                <th>Wszystkie przypadki</th>
                <th>Nowe zgony</th>
                <th>Wszystkie zgony</th>
                <th>Nowe ozdrowienia</th>
                <th>Wszystkie ozdrowienia</th>
            </tr>
             {cases.map((casee:any) => (
            <tr>
                <td>{casee.CountryCode}</td>
                <td>{casee.Country}</td>
                <td>{casee.NewConfirmed}</td>
                <td>{casee.TotalConfirmed}</td>
                <td>{casee.NewDeaths}</td>
                <td>{casee.TotalDeaths}</td>
                <td>{casee.NewRecovered}</td>
                <td>{casee.TotalRecovered}</td>
            </tr>
             ))}
        </table>
        <br/>
        
    </div>);
    };


    export default CovidNewsTable