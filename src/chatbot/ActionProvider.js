import React from "react";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, state) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.state = state;
    //this.state = {
    //genre: "",
    //author: "",
    //index: 0,
    //book: {}
    //}
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend");
    this.addMessageToState(message);
  };

  antwort = () => {
    const message = this.createChatBotMessage("Mir gehts gut und dir?");
    this.addMessageToState(message);
  };

  chooseAnOption = () => {
    const message = this.createChatBotMessage("CHOOSE AN OPTION :", {
      widget: "help",
    });
    this.addMessageToState(message);
  };

  bookAppointment = () => {
    const message = this.createChatBotMessage(
      "CHOOSE AN OPTION :",
      {
        widget: "help",
      },
      window.open(
        "https://calendly.com/familymediation",
        "_blank",
        "noreferrer"
      ),
    );
    this.addMessageToState(message);
  };

  makeAidApplication = () => {
    const message = this.createChatBotMessage(
      "Legal aid is available for people in low income or in receipt of specific benefits.",
      {
        widget: "genre",
      }
    );
    this.addMessageToState(message);
  };
  moreInformation = () => {
    const message = this.createChatBotMessage(
      "Are you in receipt of any of these specific benefits? (Universal Credit, Income Support, Employment and Support Allowance Income-Related, Jobseeker's allowance)",
      {
        widget: "moreinfo",
      }
    );
    this.addMessageToState(message);
  };
  moreInformationYes = () => {
    const message = this.createChatBotMessage(
      "Thank you for your response.You simply need to fill a form and one of our team will get in touch with you once your application is approved.If you are responding to an invitation to mediation, you have FIVE working days to submit your application. If no submission is received, we will close your case and sent court forms to your ex-partner.",
      {
        widget: "moreinfoyes",
      }
    );
    this.addMessageToState(message);
  };
  moreInformationNo = () => {
    const message = this.createChatBotMessage(
      "Do you think you might be entitled to legal aid because you are on a low income/no income/homeless?",
      {
        widget: "moreinfono",
      }
    );
    this.addMessageToState(message);
  };
  moreInformationNoNo = () => {
    const message = this.createChatBotMessage(
      "Because you are not receiving benefits or in low income, it is unlikely that you will qualify for legal aid. Knowing you might not be entitled to legal aid, would you still like to make an application for legal aid?",
      {
        widget: "moreinfonono",
      }
    );
    this.addMessageToState(message);
  };
  startApplication = () => {
    const message = this.createChatBotMessage(
      window.open(
        "https://www.directmediationservices.co.uk/laa-passporting/",
        "_blank",
        "noreferrer"
      ),
      {
        widget: "help",
      }
    );
    this.addMessageToState(message);
  };
  formFirstName = () => {
    const message = this.createChatBotMessage(
      "What's your first name?",
      // window.sessionStorage.setItem("fname", msg),
      {
        widget: "firstname",
      }
    );
    this.addMessageToState(message);
  };
  formLastName = () => {
    const message = this.createChatBotMessage(
      "What's your surname/family name?",
      // window.sessionStorage.setItem("fname", msg),
      {
        widget: "lastname",
      }
    );
    this.addMessageToState(message);
  };
  formEmail = () => {
    const message = this.createChatBotMessage(
      "What's your email",
      // window.sessionStorage.setItem("fname", msg),
      {
        widget: "email",
      }
    );
    this.addMessageToState(message);
  };
  formPhone = () => {
    const message = this.createChatBotMessage(
      "What’s your phone number?",
      {
        widget: "phone",
      }
    );
    this.addMessageToState(message);
  };
  formSave = () => {
    const message = this.createChatBotMessage(
      "save data",
      {
        widget: "data",
      }
    );
    this.addMessageToState(message);
  };
  mediationProcess = () => {
    const message = this.createChatBotMessage(
      "CHOOSE AN OPTION :",
      {
        widget: "help",
      },
      window.open(
        "https://www.directmediationservices.co.uk/mediation-services-uk/",
        "_blank",
        "noreferrer"
      ),
    );
    this.addMessageToState(message);
  };
  respondTOInvitation = () => {
    const message = this.createChatBotMessage(
      "CHOOSE AN OPTION :",
      {
        widget: "help",
      },
      window.open(
        "https://www.directmediationservices.co.uk/reply-to-mediation/",
        "_blank",
        "noreferrer"
      ),
    );
    this.addMessageToState(message);
  };

  //genreHandler = (chosenGenre) => { //wird bei der Autorauswahl aufgerufen und nicht chooseAuthor
  //this.setState({genre: chosenGenre});
  //this.chooseAuthor();
  //und dann muss man der Function nix übergeben, sondern nur let genre = this.state.genre
  //und nach der Kritik kann man dann einfach nur chooseAuthor aufrufen
  //}

  chooseAuthor = () => {
    const message = this.createChatBotMessage(
      "Von welchem Autor soll das Buch sein? Wenn du nach einem anderen Autor suchst, tippe den Namen ein.",
      {
        widget: "author",
      }
    );
    this.addMessageToState(message);
  };

  async fetchBookHandler(aspect) {
    let name = aspect;
    //const searchAspect = this.state.
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.state.authorName}&orderBy=newest&maxResults=3`
    );
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors,
      };
    });
    console.log(transformedData);
    //this.setState({book: transformedData[this.state.index]});
    //this.setState({index: +=1});
  }

  recommend = (chosenAspect) => {
    this.setState((state) => ({ ...state, authorName: chosenAspect }));

    let aspect = chosenAspect;
    this.fetchBookHandler(aspect);
    //this.setState({author: author});
    //this.props.BookStore.onFetchBooks();
    const message = this.createChatBotMessage("Mein Vorschlag für dich:");
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Wie möchtest du fortfahren? Möchtest du das Buch kaufen? Du kannst mir auch sagen, was dir an der Empfehlung nicht gefällt. Oder du kannst die Suche beenden.",
      {
        widget: "choices",
      }
    );
    this.addMessageToState(message2);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Prima! Ich habe das Buch in deinen Warenkorb gelegt."
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Möchtest du noch ein Buch kaufen?",
      {
        widget: "newChoices",
      }
    );
    this.addMessageToState(message2);
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Vielen Dank für deinen Besuch. Bis bald!"
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Kehre nun zum Fragebogen zurück."
    );
    this.addMessageToState(message2);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
