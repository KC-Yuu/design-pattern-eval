export default class Sensor {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(obs => obs.update(message));
    }
}