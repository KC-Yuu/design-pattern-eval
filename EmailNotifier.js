import Observer from './Observer.js'

export default class EmailNotifier extends Observer {
    constructor(emailAddress) {
        super();
        this.emailAddress = emailAddress;
    }

    update(message) {
        console.log("[EMAIL -> " + this.emailAddress + "] " + message);
    }
}
