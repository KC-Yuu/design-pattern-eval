import Sensor from './Sensor.js'
import ThermalSensorB from './ThermalSensorB.js'

export default class ThermalSensorBAdapter extends Sensor {
    constructor(position) {
        super();
        this.thermalSensorB = new ThermalSensorB(position);
        this.position = position;
    }

    detect() {
        const data = this.thermalSensorB.scanHeatSignature();
        const message = "Signature thermique détectée - " + data.sensor + " - " + data.date;
        this.notify(message);
        return message;
    }
}
