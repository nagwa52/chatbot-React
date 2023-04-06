import React from "react";


const Callback = (props) => {
	const callBack = [
		{
			text: "YES",
			handler: props.actionProvider.formFirstNameCall,
			id: 1,
		},
		{  
			text: "NO",
			handler: props.actionProvider.endChat,
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

export default Callback;
