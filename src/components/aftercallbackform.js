import React from "react";


const Privateorlegal = (props) => {
	const callBack = [
		{
			text: "Private",
			handler: props.actionProvider.callBackPrivate,
			id: 1,
		},
		{  
			text: "I would like to apply for legal aid",
			handler: props.actionProvider.makeAidApplication,
			id: 2,
		},
	];

	// const choiceHandler = (event) => {
	// 	console.log(event.target.value);
	// 	props.actionProvider.recommend(event.target.value);
	// };

	const buttonsMarkup = callBack.map((choice) => (
    // console.log(props.component),
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

export default Privateorlegal;