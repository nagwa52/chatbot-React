import React,{useEffect} from "react";

const Help = (props) => {
  const helpChoices = [
    {
      text: "Book a private appointment",
      handler: props.actionProvider.bookAppointment,
      id: 1
    },
    { text: "Make a legal aid application",
      handler: props.actionProvider.makeAidApplication,
      id: 2
    },
    {
      text: "I would like to have an update about my case",
      handler: props.actionProvider.formSave,
      id: 3
    },
    {
      text: "I would like to know about the mediation process",
      handler: props.actionProvider.mediationProcess,
      id: 4
    },
    {
      text: "I would like to respond to an invitation to mediation",
      handler: props.actionProvider.respondTOInvitation,
      id: 5
    },
    {
      text: "I would like a call back",
      handler: props.actionProvider.formSaveCall,
      id: 6
    },
    {
      text: "I would like to talk to somebody about workplace mediation",
      handler: props.actionProvider.formSave,
      id: 7
    },
  ];
  function handleScroll() {
    const scrollTop = document.getElementsByClassName("react-chatbot-kit-chat-message-container").scrollTo || document.body.scrollTop;
    console.log(scrollTop)
    // if (scrollTop > 0) {
      window.scrollTo(0, 0);
    // }
  }
  
  document.addEventListener('scroll', handleScroll);
  useEffect(() => {
    handleScroll();
  }, []);

  const buttonsMarkup = helpChoices.map((help) => (
    <button key={help.id} onClick={help.handler} className="knopf-button">
      {help.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Help;
