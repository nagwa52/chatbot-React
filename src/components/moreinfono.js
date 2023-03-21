import React from "react";

import "./knopf.css";

const Moreinfono = (props) => {
	const moreinfono = [
		{
			text: "YES",
			handler: props.actionProvider.moreInformationYes,
			id: 1,
		},
		{
			text: "NO",
			handler: props.actionProvider.moreInformationNoNo,
			id: 2,
		},
	];

	// const choiceHandler = (event) => {
	// 	console.log(event.target.value);
	// 	props.actionProvider.recommend(event.target.value);
	// };

	const buttonsMarkup = moreinfono.map((choice) => (
		<button
			key={choice.id}
			value={choice.text}
			onClick={choice.handler}
			className="knopf-button"
		>
			{choice.text}
		</button>
	));

	return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Moreinfono;
