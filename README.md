# Énoncé – Système de surveillance du bâtiment intelligent

Votre rôle est de concevoir un mini-système de surveillance pour un bâtiment.
Plusieurs types de capteurs provenant de deux marques différentes doivent pouvoir
fonctionner ensemble, générer des alertes, et notifier des observateurs.

Vous devez suivre les signatures indiquées ci-dessous. La logique interne et les interactions
sont à concevoir par vous.

---

## 1. Capteurs de la marque A – Signatures imposées

### CameraA

```javascript
class CameraA {
  constructor(location) {} // location = nom de la pièce
  detect() {} // Déclenche un message d'alerte (string)
}
```

### TemperatureSensorA

```javascript
class TemperatureSensorA {
  constructor(location, threshold) {} // location = nom de la pièce, threshold = température de déclenchement
  detect() {} // Déclenche un message d'alerte (string)
}
```

### MotionSensorA

```javascript
class MotionSensorA {
  constructor(location) {}
  detect() {} // Déclenche un message d'alerte (string)
}
```

---

## 2. Capteur de la marque B – API différente (signature imposée)

### ThermalSensorB

```javascript
class ThermalSensorB {
  constructor(position) {}
  scanHeatSignature() {} // Déclenche une donnée complexe json
}
```

Le format de retour pour le capteur B est en json :

```json
{
  "sensor": "<name>",
  "detection": "<detection type>",
  "date": "<current date and time>"
}
```

---

## 3. Notification

Lorsqu'un capteur est déclenché, le système doit envoyer plusieurs types de notifications possible, paramétrer selon le système que l'on souhaite. Les types de notifications sont :

- **Email** : envoie d'un email à une adresse paramétrable
- **Log** : enregistrement de la détection dans un fichier de log
- **Discord** : envoie d'un message sur un serveur discord paramétrable

Il n'est pas nécessaire d'envoyer réellement l'email, ou le message discord, ni de stocker les logs dans un fichier, chacune de ces actions peut être simulé par un console.log différent.

---

## 4. Gestion des pièces

Le batiment est composé de différentes pièces, chaque pièce peut avoir un ou plusieurs capteurs, et doit être capable de les gérer de façon générique, peu importe leur type ou marque. La pièce doit prévoir des notifications à envoyer lorsque l'un de ses capteurs se déclenche.

---

## 5. Livrables attendus

Code en JavaScript déposé sur un repository GitHub avec des commits réguliers et pertinents.
