import SecurityConsole from "./SecurityConsole.js";
import CameraA from "./CameraA.js";
import TemperatureSensorA from "./TemperatureSensorA.js";

const console1 = new SecurityConsole();

const camera1 = new CameraA("Entrée du bâtiment");
camera1.subscribe(console1);
camera1.detect();

const tempSensorCuisine = new TemperatureSensorA("Cuisine du bâtiment", 50);
tempSensorCuisine.subscribe(console1);
tempSensorCuisine.detect();