import React from "react";
import "./Background.css";

export default function Background() {
	return (
		<>
			<div className="waveWrapper waveAnimation">
				<div className="waveWrapperInner bgTop">
					<div className="wave waveTop"></div>
				</div>
				<div className="waveWrapperInner bgMiddle">
					<div className="wave waveMiddle"></div>
				</div>
				<div className="waveWrapperInner bgBottom">
					<div className="wave waveBottom"></div>
				</div>
			</div>
		</>
	);
}
