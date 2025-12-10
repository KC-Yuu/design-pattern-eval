import Observer from './Observer.js'

export default class DiscordNotifier extends Observer {
    constructor(serverName, channelName) {
        super();
        this.serverName = serverName;
        this.channelName = channelName;
    }

    update(message) {
        console.log("[DISCORD -> " + this.serverName + "/#" + this.channelName + "] " + message);
    }
}
