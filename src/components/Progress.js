import React from "react";

export default ( props ) => {
	const { classType, message, onclick } = props;
	return ( 
		<div>
			<button id = "start" 
				className = { classType } 
				onClick = { onclick } > 
					start 
			</button>
			<p> { message } </p>
		</div> 
	);
}