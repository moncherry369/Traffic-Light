import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "../styles/index.scss"


const TrafficLight= () => {1
    const [state,setState] = useState(".red");
    const [light,setLight] = useState(true);
    
    const toggleLight = () => {
        //this isn't working need to make glow on select//
        setLight((curr) => (curr == setState ? "": state));
    }
    return (
        <div>
            
                <div className="top"></div>
            <div className="container">
                <div className="red light"></div>
                <div className="yellow light"></div>
                <div className="green light"></div>
            </div>
        </div>
        
        )
}
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));