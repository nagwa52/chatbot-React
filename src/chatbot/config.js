import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import NewChoices from "../components/NewChoices";
import Choices from "../components/Choices";
import Genre from "../components/Genre";
import Book from "../components/Book";
import Help from "../components/Help";
import Author from "../components/Author";
import Moreinfo from "../components/moreinfo";

const botName = "Larry";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi there! I am ${botName}, your DMS chat bot and I am here to help you. Below are some common things that people ask me.`
    ),
    createChatBotMessage(`CHOOSE AN OPTION`, {
      widget: "help"
    })
  ],
  state: {
    authorName: ""
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E"
    },
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  widgets: [
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />
    },
    {
      widgetName: "genre",
      widgetFunc: (props) => <Genre {...props} />
    },
    {
      widgetName: "author",
      widgetFunc: (props) => <Author {...props} />
    },
    {
      widgetName: "book",
      widgetFunc: (props) => <Book {...props} />
    },
    {
      widgetName: "choices",
      widgetFunc: (props) => <Choices {...props} />
    },
    {
      widgetName: "moreinfo",
      widgetFunc: (props) => <Moreinfo {...props} />
    },
    {
      widgetName: "newChoices",
      widgetFunc: (props) => <NewChoices {...props} />
    }
  ]
};

export default config;
