import React from 'react';
import TypedJS from 'react-typed';
import Logo from '../Images/logo.png';

import '../CSS/App.css';
import '../CSS/skeleton.css';


export default function Landing() {
  return (
    <div className="container">
      <div className="row topMinorPadding">
        <div className="one column">
          <a target="_blank" href="/"> <img src={Logo} height="70px" alt=""/> </a>
        </div>
      </div>

      <div className="row topPadding">
        <div className="eleven columns">
          <h1 className="emphasisText RalewayRegular"> 
            <TypedJS
              strings={[ 'Andy Du Ly' ]}
              typeSpeed={25}
              showCursor={false}
            />
          </h1>

          <h3 className="primaryText RalewayRegular"> 
            <TypedJS
              strings={[ 'Full-Stack Developer' ]}
              typeSpeed={10}
              showCursor={false}
            />
          </h3>

          <h6 className="primaryText ProximaNova">
            Proficient with React (Ionic, Material UI), JavaScript (ES6, TypeScript), 
            Java, HTML, and CSS (Skeleton, Pure Grid/Flex). 
            Familiar with cloud solutions (GCP), SDLC, and 
            multiple project management methodologies. Previously: {' '} 

            <TypedJS
              strings={[ 'Matrix Logistics, DHL Supply Chain', 'AvocadoCore', 'Parkaze Inc.' ]}
              typeSpeed={20}
              backSpeed={20}
              backDelay={2000}
              loop
            /> <br/><br/>

            One of MLH's Top 50 Hackers of 2020. Read my story <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href="https://top.mlh.io/2020/profiles/andy-du-ly"> here. </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
