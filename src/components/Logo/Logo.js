import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () =>{
	return(
     <Tilt className='Tilt ma2 mt0 br2 shadow-2' style={{ width: '150px', height: '150px', backgroundColor: '' }}>
      <div className ='pa3 ma1'   >
        <div className='Tilt-inner  '> 
          <img  alt='logo' src = {brain} width= '150px' height= '150px'/> </div>
        </div>
     </Tilt>

		);
}

export default Logo;