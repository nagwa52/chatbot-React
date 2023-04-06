import React from "react";

const Endchat = (props) => {
	const callBack = [
		{
			// text: "YES",
			handler: props.actionProvider.formFirstName,
			id: 1,
		},
	];

	// const choiceHandler = (event) => {
	// 	console.log(event.target.value);
	// 	props.actionProvider.recommend(event.target.value);
	// };

	const buttonsMarkup = callBack.map((choice) => (
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

export default Endchat;
