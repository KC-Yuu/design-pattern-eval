import SecurityConsole from "./SecurityConsole.js";
import CameraA from "./CameraA.js";
import TemperatureSensorA from "./TemperatureSensorA.js";
import MotionSensorA from "./MotionSensorA.js";
import ThermalSensorBAdapter from "./ThermalSensorBAdapter.js";
import EmailNotifier from "./EmailNotifier.js";
import LogNotifier from "./LogNotifier.js";
import DiscordNotifier from "./DiscordNotifier.js";
import Room from "./Room.js";

// Ici on créer les notifiers 
const console1 = new SecurityConsole();
const emailNotifier = new EmailNotifier("admin@securite.com");
const logNotifier = new LogNotifier("security.log");
const discordNotifier = new DiscordNotifier("Sécurité Corp", "alertes");

// Ici on crée les sensors
const camera1 = new CameraA("Entrée principale");
const motionSensor1 = new MotionSensorA("Hall");
const tempSensor1 = new TemperatureSensorA("Cuisine", 50);
const thermalSensorB = new ThermalSensorBAdapter("Entrepôt");

// Ici on crée nos pièces avec leurs notifiers
const hall = new Room("Hall");
hall.addNotifier(console1);
hall.addNotifier(emailNotifier);
hall.addSensor(camera1);
hall.addSensor(motionSensor1);

const cuisine = new Room("Cuisine");
cuisine.addNotifier(console1);
cuisine.addNotifier(discordNotifier);
cuisine.addSensor(tempSensor1);

const entrepot = new Room("Entrepôt");
entrepot.addNotifier(console1);
entrepot.addNotifier(logNotifier);
entrepot.addSensor(thermalSensorB);

// On simule le déclenchement des capteurs
console.log("=== Démonstration du système de surveillance ===\n");

camera1.detect();
console.log("");
motionSensor1.detect();
console.log("");
tempSensor1.detect();
console.log("");
thermalSensorB.detect();
