export default class Room {
    constructor(name) {
        this.name = name;
        this.sensors = [];
        this.notifiers = [];
    }

    addNotifier(notifier) {
        this.notifiers.push(notifier);
    }

    addSensor(sensor) {
        this.notifiers.forEach(notifier => sensor.subscribe(notifier));
        this.sensors.push(sensor);
    }

    triggerAllSensors() {
        this.sensors.forEach(sensor => sensor.detect());
    }

    getSensorCount() {
        return this.sensors.length;
    }
}
