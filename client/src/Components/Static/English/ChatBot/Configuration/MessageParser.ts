class MessageParser {
    actionProvider: any;
    state: any;
    constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
    }

    parse(message: any) {
    console.log(message)
    const lowercase = message.toLowerCase()
    if(lowercase.includes("hello")) {
        this.actionProvider.greet()
    }
    }
}

export default MessageParser;