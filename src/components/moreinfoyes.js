import React from "react";

const Moreinfoyes = (props) => {
	const moreinfo = [
		{
			text: "Start my application now",
			handler: props.actionProvider.startApplication,
			id: 1,
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
			onClick={choice.handler}
			className="knopf-button"
		>
			{choice.text}
		</button>
	));

	return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Moreinfoyes;
