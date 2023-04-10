import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Genre from "../components/Genre";
import Help from "../components/Help";
import Moreinfo from "../components/moreinfo";
import Moreinfoyes from "../components/moreinfoyes";
import Moreinfono from "../components/moreinfono";
import Moreinfonono from "../components/moreinfonono";
import Firstname from "../components/firstname";
import Lastname from "../components/lastname";
import Email from "../components/email";
import Phone from "../components/phone";
import Data from "../components/data";
import Callback from "../components/callback";
import Endchat from "../components/endchat";
import Privateorlegal from "../components/aftercallbackform";
import Callbackprivate from "../components/callbackprivate";
import Startagain from "../components/startagain";
// import Startapplication from "../components/startapplication";

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
    callBackComponent:"callback",
    updateCaseComponent:"updateCase",
    passporting:"passporting",
    homeless:"homeless",
    mediationhome:"mediationhome",
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
      widgetName: "moreinfo",
      widgetFunc: (props) => <Moreinfo {...props} />,
      mapStateToProps: ['passporting'],
    },
    {
      widgetName: "moreinfoyes",
      widgetFunc: (props) => <Moreinfoyes {...props} />,
      mapStateToProps: ['passporting'],
    },
    {
      widgetName: "moreinfoyeshomeless",
      widgetFunc: (props) => <Moreinfoyes {...props} />,
      mapStateToProps: ['homeless'],
    },
    {
      widgetName: "moreinfoyesmediationhome",
      widgetFunc: (props) => <Moreinfoyes {...props} />,
      mapStateToProps: ['mediationhome'],
    },
    // {
    //   widgetName: "startapplication",
    //   widgetFunc: (props) => <Startapplication {...props} />,
    //   mapStateToProps: ['passporting'],
    // },
    {
      widgetName: "moreinfono",
      widgetFunc: (props) => <Moreinfono {...props} />,
      mapStateToProps: ['Homeless'],
    },
    {
      widgetName: "moreinfonono",
      widgetFunc: (props) => <Moreinfonono {...props} />,
      mapStateToProps: ['Homeless'],
    },
    {
      widgetName: "firstnamecall",
      widgetFunc: (props) => <Firstname {...props} />,
      mapStateToProps: ['callBackComponent'],
    },
    {
      widgetName: "firstname",
      widgetFunc: (props) => <Firstname {...props} />,
      mapStateToProps: ['updateCaseComponent'],
    },
    {
      widgetName: "lastnamecall",
      widgetFunc: (props) => <Lastname {...props} />,
      mapStateToProps: ['callBackComponent'],
    },
    {
      widgetName: "lastname",
      widgetFunc: (props) => <Lastname {...props} />,
      mapStateToProps: ['updateCaseComponent'],
    },
    {
      widgetName: "emailcall",
      widgetFunc: (props) => <Email {...props} />,
      mapStateToProps: ['callBackComponent'],
    },
    {
      widgetName: "email",
      widgetFunc: (props) => <Email {...props} />,
      mapStateToProps: ['updateCaseComponent'],
    },
    {
      widgetName: "phonecall",
      widgetFunc: (props) => <Phone {...props} />,
      mapStateToProps: ['callBackComponent'],
    },
    {
      widgetName: "phone",
      widgetFunc: (props) => <Phone {...props} />,
      mapStateToProps: ['updateCaseComponent'],
    },
    {
      widgetName: "datacall",
      widgetFunc: (props) => <Data {...props} />,
      mapStateToProps: ['callBackComponent'],
    },
    {
      widgetName: "data",
      widgetFunc: (props) => <Data {...props} />,
      mapStateToProps: ['updateCaseComponent'],
    },
    {
      widgetName: "callback",
      widgetFunc: (props) => <Callback {...props} />,
    },
    {
      widgetName: "privateorlegal",
      widgetFunc: (props) => <Privateorlegal {...props} />,
    },
    {
      widgetName: "callbackprivate",
      widgetFunc: (props) => <Callbackprivate {...props} />,
    },
    {
      widgetName: "endchat",
      widgetFunc: (props) => <Endchat {...props} />
    },
    {
      widgetName: "startagain",
      widgetFunc: (props) => <Startagain {...props} />
    },
  ]
};

export default config;
