export default class ThermalSensorB {
    constructor(position) {
        this.position = position;
    }

    scanHeatSignature() {
        return {
            sensor: "ThermalSensorB - " + this.position,
            detection: "thermal",
            date: new Date().toISOString()
        };
    }
}
