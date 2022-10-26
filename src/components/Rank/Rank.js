import React from 'react';


const Rank = ({name, entry}) =>{
	return(
     <div>
      <div className='white center f2'>
      {`${name}, your current entries count is`}
      </div>
      <div className= 'white center f3'>
       {entry}
      </div>

     </div>
		);
}

export default Rank;