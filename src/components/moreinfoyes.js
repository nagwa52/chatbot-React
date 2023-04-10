import React from "react";

const Moreinfoyes = (props) => {
	const moreinfo = [
		{
			text: "Start my application now",
			handler: props.actionProvider.applicationpassport,
			id: 1,
		},
	];

  const openForm = (e) => {
		e.preventDefault();
		console.log(props)
    if (props.passporting) {
      window.open(
        "https://www.directmediationservices.co.uk/laa-passporting/",
        "_blank",
        "noreferrer"
      );
			props.actionProvider.startAgain()
    } else if (props.homeless) {
			window.open(
        "https://www.directmediationservices.co.uk/laa-low-income/",
        "_blank",
        "noreferrer"
      );
			props.actionProvider.startAgain()
    } else if (props.mediationhome) {
			window.open(
        "https://www.directmediationservices.co.uk/mediation-legal-aid/",
        "_blank",
        "noreferrer"
      );
			props.actionProvider.startAgain()
    } else {
			props.actionProvider.moreInformationNo()
    }
  };

	const buttonsMarkup = moreinfo.map((choice) => (
		<button
			key={choice.id}
			value={choice.text}
			className="knopf-button"
		>
			{choice.text}
		</button>
	));
			return <div className="knopf-container" onClick={openForm} >{buttonsMarkup}</div>;
};

export default Moreinfoyes;
