export default class Room {
    constructor(name) {
        this.name = name;
        this.sensors = [];
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    triggerAllSensors() {
        this.sensors.forEach(sensor => sensor.detect());
    }

    getSensorCount() {
        return this.sensors.length;
    }
}
