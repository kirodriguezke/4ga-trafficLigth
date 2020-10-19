import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	console.log(color);
	return (
		<div className="text-center mt-5">
			<div className="circle red" onClick={() => setColor("red")} />
			<div className="circle ambar" onClick={() => setColor("yellow")} />
			<div className="circle green" onClick={() => setColor("green")} />
		</div>
	);
}
