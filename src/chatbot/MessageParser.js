class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (
      lowercase.includes("wie geht's") ||
      lowercase.includes("wie geht es dir")
    ) {
      this.actionProvider.antwort();
    }

    if (
      lowercase.includes("book")
    ) {
      this.actionProvider.bookAppointment();
    }
    if (
      lowercase.includes("make a legal aid application")
    ) {
      this.actionProvider.makeAidApplication();
    }
    if (
      lowercase.includes("more") ||
      lowercase.includes("information")
    ) {
      this.actionProvider.moreInformation();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
  }
}

export default MessageParser;
