import Observer from "./Observer.js";

export default class SecurityConsole extends Observer {
    update(message) {
       console.log("[Console Système de surveillance ] " + message); 
    }
}