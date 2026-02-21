Parfait 🙂 voici la **version française complète synchronisée** avec le README anglais (installation en haut, gateway, dons, images intégrées).

Tu peux copier/coller directement dans **README_FR.md**.

---

# 🔋 Smart Voltronic – Add-on Home Assistant

➡️ **Read this README in English :**
[https://github.com/tapion69/smart-voltronic/blob/main/README.md](https://github.com/tapion69/smart-voltronic/blob/main/README.md)

☕ **Soutenir les développeurs :**
Si vous aimez ce projet, vous pouvez soutenir son développement ici :
[https://buymeacoffee.com/tapion](https://buymeacoffee.com/tapion)

---

Add-on Home Assistant permettant de **superviser et piloter jusqu’à 3 onduleurs Voltronic / Axpert**.

Compatible avec la majorité des modèles utilisant le protocole Voltronic (Axpert, VM, MKS, MAX, MAX II, MAX IV…).

---

# 🔧 Installation – Câble RS232 & Adaptateur USB

Cet add-on communique avec l’onduleur via le **port RS232 Voltronic (connecteur RJ45)**.

Pour connecter votre onduleur à Home Assistant, vous devez :

1️⃣ Fabriquer un **câble RJ45 → DB9**
2️⃣ Utiliser un **adaptateur USB → RS232**

---

## 🧰 Matériel nécessaire

Vous aurez besoin de :

* 1 connecteur RJ45 (prise Ethernet)
* 1 connecteur DB9 femelle
* Un petit câble (seulement **3 fils nécessaires**)
* 1 adaptateur USB → RS232 (**FTDI recommandé**)

---

## 🔌 Câblage RJ45 → DB9

Les onduleurs Voltronic exposent le port RS232 sur un **connecteur RJ45**.
Seuls les signaux **TX / RX / GND** sont nécessaires.

### Schéma de câblage

![RJ45 vers DB9 pinout](docs/images/cable-rj45-db9-pinout.jpg)

### Tableau de correspondance

| Pin RJ45 | Pin DB9 | Signal |
| -------- | ------- | ------ |
| 1        | 2       | TX     |
| 2        | 3       | RX     |
| 8        | 5       | GND    |

⚠️ Important :

* RJ45 = **vue de dessus**
* DB9 = **vue de face (femelle)**

---

## 🪛 Exemple de câble terminé

![Câble RJ45 DB9](docs/images/cable-rj45-db9.jpg)

À l’intérieur du RJ45, seulement **3 fils sont connectés** :

![Câblage RJ45](docs/images/cable-rj45-inside.jpg)

---

## 🔌 Adaptateur USB → RS232

Le câble DB9 doit être connecté à Home Assistant via un adaptateur USB.

Chipsets recommandés :

* ⭐ FTDI (meilleure compatibilité)
* ✔️ Prolific PL2303 (fonctionne bien)

Exemple d’adaptateur :

![Adaptateur USB RS232](docs/images/usb-rs232-adapter.png)

---

## 🖥️ Connexion finale

```
Port RJ45 onduleur
      ↓
Câble RJ45 → DB9 (DIY)
      ↓
Adaptateur USB → RS232
      ↓
Home Assistant / Raspberry Pi / Serveur
```

Une fois branché, le port série apparaîtra sous la forme :

```
/dev/serial/by-id/...
```

Vous pouvez maintenant configurer le port dans l’add-on 🎉

---

# ⚙️ Configuration (Important)

## 🔌 Nombre d’onduleurs supportés

L’add-on peut gérer **jusqu’à 3 onduleurs simultanément** :

* Serial 1 → Onduleur 1
* Serial 2 → Onduleur 2
* Serial 3 → Onduleur 3

Les onduleurs peuvent être :

* Indépendants
* En parallèle Voltronic
* De modèles et générations différents

Chaque onduleur possède :

* Son port série dédié
* Son espace MQTT dédié
* Ses propres entités Home Assistant

### Topics MQTT

```
voltronic/1/...
voltronic/2/...
voltronic/3/...
```

Chaque onduleur est totalement isolé des autres.

---

## 🧠 Compatibilité multi-modèles

Les différences de firmware sont gérées automatiquement :

* Détection des commandes supportées
* Gestion automatique des réponses NAK
* Adaptation automatique des formats
* Fallback intelligent si nécessaire

Vous pouvez connecter différents modèles **sans modifier le code**.

---

# ✨ Fonctionnalités principales

## 🟢 Supervision complète

Remontée automatique dans Home Assistant :

* État temps réel (mode, charge, décharge, PV, réseau…)
* Puissances PV / Batterie / Charge
* Énergie journalière / mensuelle / annuelle
* Températures, tensions, courants
* Alarmes et warnings
* État des MPPT
* État de charge batterie
* Statut charge AC / solaire

Mise à jour rapide (~4 secondes).

---

## 🎛️ Pilotage depuis Home Assistant

Paramètres modifiables :

### Priorités

* Priorité de sortie (Utility / Solar / SBU)
* Priorité de charge (Solar First / Solar + Utility / Solar Only)
* Type de batterie

### Tensions batterie

* Bulk (CV)
* Float
* Recharge
* Re-discharge
* Cut-off

### Courants

* Courant de charge max total
* Courant de charge secteur max
* Courant de décharge max

Chaque modification :

1. Est envoyée à l’onduleur
2. Est relue automatiquement
3. Est synchronisée avec Home Assistant

Aucune désynchronisation possible.

---

# 🌐 Support futur – Gateway Wi-Fi / Ethernet

Une future version ajoutera la prise en charge des **gateway**, permettant de connecter les onduleurs via :

* Wi-Fi
* Ethernet

Idéal pour les installations distantes ou en baie technique (sans USB).

---

# 🏠 Intégration Home Assistant

Les entités sont créées automatiquement via **MQTT Auto-Discovery** :

* Sensors
* Numbers
* Select
* Switches
* Binary sensors

Aucune configuration YAML requise.

---

# 🔄 Synchronisation automatique

Après chaque modification :

* Rafale de lecture automatique
* Vérification des paramètres
* Home Assistant reflète toujours l’état réel.

---

# 🔐 Robustesse

* Gestion automatique des erreurs série
* Protection contre commandes invalides
* File d’attente série anti-collision
* Redémarrage automatique en cas d’erreur
* Compatible systèmes parallèles

---

## 📄 Liste complète des paramètres

👉 [https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/PARAMETERS.md](https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/PARAMETERS.md)

---

# 🛠️ Support & Suggestions

Pour tout bug ou amélioration, merci d’ouvrir une **issue sur GitHub**.

---

# ❤️ Contribution

Projet open-source évolutif.
Les contributions et retours sont les bienvenus.

---

**Contrôle intelligent des onduleurs, entièrement intégré à Home Assistant 🚀**
