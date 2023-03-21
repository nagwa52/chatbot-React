import React from "react";

import "./knopf.css";

const Moreinfo = (props) => {
	const moreinfo = [
		{
			text: "Yes!",
			handler: props.actionProvider.makeAidApplication,
			id: 1,
		},
		{
			text: "No!",
			handler: props.actionProvider.makeAidApplication,
			id: 2,
		},
	];

	// const choiceHandler = (event) => {
	// 	console.log(event.target.value);
	// 	props.actionProvider.recommend(event.target.value);
	// };

	const buttonsMarkup = moreinfo.map((choice) => (
		<button
			key={choice.id}
			value={choice.text}
			// onClick={choiceHandler}
			className="knopf-button"
		>
			{choice.text}
		</button>
	));

	return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Moreinfo;
