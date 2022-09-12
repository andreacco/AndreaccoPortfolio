import Chatbot from "react-chatbot-kit"
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider"
import config from "./Config"

export default function ChatBot() {
  return (
    <div>
      <Chatbot 
        config={config} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser}
      />
    </div>
  )
}
