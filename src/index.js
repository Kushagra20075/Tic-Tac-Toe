import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './Game';
import Particles from 'react-particles-js';



// ========================================

ReactDOM.render(
  <div>
    <div>
    <Game />,
    </div>
    <div>
    <Particles className="particles" params={{
      particles: {
        "line_linked": {
          "color":"#FF0000"
          },
          "color":{
            "value": "#FF0000"
          },
        number: {
          value: 200,
        },

        size: {
          value: 3,
        },
      },
    }}/>,
    </div>
    
  </div>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
