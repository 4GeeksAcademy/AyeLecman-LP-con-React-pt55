import React from "react";

//create your first component
const Head = () => {
	return (
		<div className="p-5 m-1 mx-3 bg-body-secondary">
			<h1>A Warm welcome!</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<button type="button" className="btn btn-primary">Call to action!</button>
		</div>
	);
};

export default Head;