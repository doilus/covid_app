import React from 'react';
import './App.css';

const CovidNewsDate = ({ date }: {date:any}) => {
      return (
      <div>
        <br></br>
        <h1 className="headerRaport"> RAPORT - PANDEMIA KORONAWIRUSA</h1>
       
            <p className="update"> aktualizowany: {date} </p>
       
    </div>);
    };

    export default CovidNewsDate