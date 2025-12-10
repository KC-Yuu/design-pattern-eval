import Observer from './Observer.js'

export default class LogNotifier extends Observer {
    constructor(logFile) {
        super();
        this.logFile = logFile;
    }

    update(message) {
        const timestamp = new Date().toISOString();
        console.log("[LOG -> " + this.logFile + "] [" + timestamp + "] " + message);
    }
}
