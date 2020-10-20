import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	console.log(color);
	return (
		<div className="box">
			<div
				className={"circle red " + (color == "red" ? "selected" : "")}
				onClick={() => setColor("red")}
			/>
			<div
				className={
					"circle ambar " + (color == "ambar" ? "selected" : "")
				}
				onClick={() => setColor("ambar")}
			/>
			<div
				className={
					"circle green " + (color == "green" ? "selected" : "")
				}
				onClick={() => setColor("green")}
			/>
		</div>
	);
}
