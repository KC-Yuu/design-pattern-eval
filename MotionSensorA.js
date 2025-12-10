import Sensor from './Sensor.js'

export default class MotionSensorA extends Sensor {
    constructor(location) {
        super();
        this.location = location;
    }

    detect() {
        const message = "Mouvement détecté - Capteur de mouvement - " + this.location;
        this.notify(message);
        return message;
    }
}
