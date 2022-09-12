import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Options/Options";

const config = {
    botName: "Andreita",
    initialMessages: [
        createChatBotMessage(`Hello world!`, {
            widget: 'options',
        })
    ],
    widgets: [{
        widgetName: "options",
        // widgetFunc: (props: any) => <Options />
        }
    ],

}

export default config