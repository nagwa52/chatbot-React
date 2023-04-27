import React from "react";
const Moreinfono = (props) => {
	const moreinfono = [
		{
			text: "YES",
			handler: props.actionProvider.moreInformationYesHomeless,
			id: 1,
		},
		{
			text: "NO",
			handler: props.actionProvider.chooseAnOption,
			id: 2,
		},
	];
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
