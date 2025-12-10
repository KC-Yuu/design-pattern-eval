import Sensor from './Sensor.js'

export default class TemperatureSensorA extends Sensor {
    constructor(location, threshold) {
        super();
        this.location = location;
        this.threshold = threshold;
    }
    
    detect() {
        const message = "Température critique (" + this.threshold + "°C) - " + this.location;
        this.notify(message);
        return message;
    } 
}
