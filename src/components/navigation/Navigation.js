import React from 'react';


const Navigation = ({onRouteChange , isSignedIn}) => {
	if(isSignedIn){
	  return(
		<nav style={{display : 'flex', justifyContent : 'flex-end'}}>
		<h2 className = 'center'> Detects your face from the picture you uploaded- A SMART BRAIN!!!. </h2>
		 <p onClick= { () => onRouteChange('signout')} className = 'f3 link dim white underline pa1 pointer pr3' > Signout </p>
		</nav>

		);

	} 
	else{
		return(
		<nav style={{display : 'flex', justifyContent : 'flex-end'}}>
		 <p onClick= { () => onRouteChange('signin')} className = 'f3 ma1 br1 link dim white underline pa1 pr3 pointer' > Signin </p>
		 <p onClick= { () => onRouteChange('register')} className = 'f3 ma1 link dim white underline pa1 pr2 pointer' > Register </p>
		</nav>

		);

	}

	
}

export default Navigation;