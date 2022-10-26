import React from 'react';
import './ImageLink.css';


const ImageLink= ({onInputChange, onPictureSubmit}) => {
	return(
		<div>
		 <p className='center f3'>
		  {`Start detecting the faces to increase your rank!`}
		  </p>
		  <div className='center '>
		  <div className='  br3 form pa4 center shadow-5'>
		   <input className='pa2 ma1 center w-80' type='text' onChange= {onInputChange} />
		   <button 
			   className= ' ph3 f4 pv2 dib ma1 link grow w-20 pointer bg-light-yellow' 
			   onClick = {onPictureSubmit}> 
			   Detect 
		   </button>
		   </div>
		  </div>
		</div>

		);
}

export default ImageLink;