import React from "react";
const Moreinfo = (props) => {
	const moreinfo = [
		{
			text: "YES",
			handler: props.actionProvider.moreInformationYes,
			id: 1,
		},
		{
			text: "NO",
			handler: props.actionProvider.moreInformationNo,
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
			onClick={choice.handler}
			className="knopf-button"
		>
			{choice.text}
		</button>
	));

	return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Moreinfo;
