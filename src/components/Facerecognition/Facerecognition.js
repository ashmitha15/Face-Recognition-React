import React from 'react';
import './Facerecognition.css';


const Facerecognition = ({imageUrl , box}) => {
	return(
		<div className='center ma'>
		<div className='absolute mt2'>
         <img id='inputimage' src = {imageUrl}  width ='500px' height='auto'/>
          <div className='boundingBox' style={{top: box.topRow ,right:box.rightCol, left:box.leftCol,bottom: box.bottomRow}}>
          </div>
         </div>
		</div>

		);
}

export default Facerecognition;