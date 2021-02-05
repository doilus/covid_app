import React from 'react';
import './CovidNewsCs.css';
import Moment from 'react-moment';
import { DateTime } from '@syncfusion/ej2-react-charts';
import './../style.css';

const CovidNewsDate = ({ date }: {date:any}) => {
      return (
      <div>
        
        <div className="text-welcome">
          RAPORT - PANDEMIA KORONAWIRUSA
        </div>


        
        
        {/* <div className="time-position">
            <Moment format="YYYY/MM/DD" className="update-time">
              {date}
            </Moment>
          </div> */}
            


       
    </div>);
    };

    export default CovidNewsDate