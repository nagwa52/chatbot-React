import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import larry from "./larry-2.jpeg";

import "./App.css";

function App() {

  const [showBot, toggleBot] = useState(false);

  function handleScroll() {
    const scrollTop = document.documentElement.scrollHeight || document.body.scrollTop;
    console.log(scrollTop)
    if (scrollTop > 0) {
      window.scrollTo(0, 0);
    }
  }
  

  // container.addEventListener
  document.addEventListener('scroll', handleScroll);
  useEffect(() => {
    handleScroll();
  }, []);
  
  // To remove the event listener later
  // document.removeEventListener('scroll', handleScroll);

//   const header = document.querySelectorAll(".react-chatbot-kit-chat-header");
// header.addEventListener("click",handleScroll)
  return (
    <div className="App">
      {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
            <Chatbot
            className ="chatbot-page"
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              disableScrollToBottom
              
            />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
        >
          {/* <div>Chatbot</div> */}
          {/* <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg> */}
          <img
            className="app-chatbot-button-icon"
            src={larry}
            style={{ width: "120%", height: "120%" }}
            alt="Larry img"
          />
        </button>
      </Flip>
    </div>
  );
}

export default App;
