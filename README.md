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
  constructor(location, threshold) {} // location = nom de la pièce, threshold = température
                                      // de déclenchement
  detect() {} // Déclenche un message d'alerte (string)
}
```
