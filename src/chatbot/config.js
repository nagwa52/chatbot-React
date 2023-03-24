import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import NewChoices from "../components/NewChoices";
import Choices from "../components/Choices";
import Genre from "../components/Genre";
import Book from "../components/Book";
import Help from "../components/Help";
import Author from "../components/Author";
import Moreinfo from "../components/moreinfo";
import Moreinfoyes from "../components/moreinfoyes";
import Moreinfono from "../components/moreinfono";
import Moreinfonono from "../components/moreinfonono";
import Firstname from "../components/firstname";
import Lastname from "../components/lastname";
import Email from "../components/email";
import Phone from "../components/phone";
import Data from "../components/data";

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
      widgetName: "moreinfoyes",
      widgetFunc: (props) => <Moreinfoyes {...props} />
    },
    {
      widgetName: "moreinfono",
      widgetFunc: (props) => <Moreinfono {...props} />
    },
    {
      widgetName: "moreinfonono",
      widgetFunc: (props) => <Moreinfonono {...props} />
    },
    {
      widgetName: "firstname",
      widgetFunc: (props) => <Firstname {...props} />
    },
    {
      widgetName: "lastname",
      widgetFunc: (props) => <Lastname {...props} />
    },
    {
      widgetName: "email",
      widgetFunc: (props) => <Email {...props} />
    },
    {
      widgetName: "phone",
      widgetFunc: (props) => <Phone {...props} />
    },
    {
      widgetName: "data",
      widgetFunc: (props) => <Data {...props} />
    },
    {
      widgetName: "newChoices",
      widgetFunc: (props) => <NewChoices {...props} />
    }
  ]
};

export default config;
