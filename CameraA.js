import Sensor from './Sensor.js'

export default class CameraA extends Sensor {
    constructor(location) {
        super();
        this.location = location;
    }

    detect() {
        const message = "Mouvement détecté - Caméra - " + this.location;
        this.notify(message);
        return message;
    }

}