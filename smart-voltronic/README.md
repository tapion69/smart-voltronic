Perfect 👍 here is the **FINAL README reordered** with the **Installation section moved near the top**.

You can copy/paste directly into GitHub.

---

# 🔋 Smart Voltronic – Home Assistant Add-on

➡️ **Lire ce README en français :**
[https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/README_FR.md](https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/README_FR.md)

☕ **Support the developers:**
If you like this project, you can support future development here:
[https://buymeacoffee.com/tapion](https://buymeacoffee.com/tapion)

---

Home Assistant add-on designed to **monitor and control up to 3 Voltronic / Axpert inverters**.

Compatible with most models using the Voltronic protocol (Axpert, VM, MKS, MAX, MAX II, MAX IV…).

---

# 🔧 Installation – RS232 Cable & USB Adapter

This add-on communicates with the inverter using the **Voltronic RS232 port (RJ45 connector)**.

To connect your inverter to Home Assistant, you must:

1️⃣ Build a **RJ45 → DB9 serial cable**
2️⃣ Use a **USB → RS232 adapter**

---

## 🧰 Required hardware

You will need:

* RJ45 connector (Ethernet plug)
* DB9 female connector
* Small cable (only **3 wires required**)
* USB → RS232 adapter (**FTDI recommended**)

---

## 🔌 RJ45 → DB9 wiring

Voltronic inverters expose the RS232 port on an **RJ45 connector**.
Only **TX / RX / GND** are required.

### Pinout diagram

![RJ45 to DB9 pinout](docs/images/cable-rj45-db9-pinout.jpg)

### Wiring table

| RJ45 Pin | DB9 Pin | Signal |
| -------- | ------- | ------ |
| 1        | 2       | TX     |
| 2        | 3       | RX     |
| 8        | 5       | GND    |

⚠️ Important:

* RJ45 drawing = **Top view**
* DB9 drawing = **Front view (female)**

---

## 🪛 Example finished cable

![RJ45 DB9 cable](docs/images/cable-rj45-db9.jpg)

Inside the RJ45 connector, only **3 wires are connected**:

![RJ45 wiring close-up](docs/images/cable-rj45-inside.jpg)

---

## 🔌 USB → RS232 adapter

You must connect the DB9 cable to Home Assistant using a USB adapter.

Recommended chipsets:

* ⭐ FTDI (best compatibility)
* ✔️ Prolific PL2303 (works well)

Example adapter:

![USB RS232 adapter](docs/images/usb-rs232-adapter.png)

---

## 🖥️ Final connection

```
Inverter RJ45 port
      ↓
RJ45 → DB9 cable (DIY)
      ↓
USB → RS232 adapter
      ↓
Home Assistant / Raspberry Pi / Server
```

Once plugged, the serial port will appear as:

```
/dev/serial/by-id/...
```

You can now configure the port inside the add-on 🎉

---

# ⚙️ Configuration (Important)

## 🔌 Number of supported inverters

The add-on can manage **up to 3 inverters simultaneously**:

* Serial 1 → Inverter 1
* Serial 2 → Inverter 2
* Serial 3 → Inverter 3

Inverters can be:

* Standalone
* Parallel Voltronic systems
* Different models and generations

Each inverter has:

* Its own serial port
* Its own MQTT namespace
* Its own Home Assistant entities

### MQTT Topics

```
voltronic/1/...
voltronic/2/...
voltronic/3/...
```

Each inverter is completely isolated from the others.

---

## 🧠 Multi-model compatibility

Firmware differences between generations are handled automatically:

* Detection of supported commands
* Automatic NAK handling
* Automatic format adaptation
* Smart fallback when needed

You can mix different inverter models **without modifying any code**.

---

# ✨ Main Features

## 🟢 Full monitoring

Automatic data integration into Home Assistant:

* Real-time inverter status (mode, charging, discharging, PV, grid…)
* PV / Battery / Load power
* Daily / Monthly / Yearly energy
* Temperatures, voltages, currents
* Alarms and warnings
* MPPT status
* Battery State of Charge
* AC charging & solar charging status

Fast refresh rate (~4 seconds).

---

## 🎛️ Control directly from Home Assistant

Adjust inverter settings directly from HA:

### Output & Charging priorities

* Output priority (Utility / Solar / SBU)
* Charging priority (Solar First / Solar + Utility / Solar Only)
* Battery type

### Battery voltages

* Bulk (CV)
* Float
* Recharge
* Re-discharge
* Cut-off

### Currents

* Max charging current (total)
* Max AC charging current (grid)
* Max discharging current

### Battery thresholds & firmware options

Every change:

1. Is sent to the inverter
2. Is automatically read back
3. Is synchronized with Home Assistant

No desynchronization possible.

---

# 🌐 Future support – Gateway / Ethernet modules

A future release will add support for **gateway modules**, allowing inverters to connect via:

* Wi-Fi
* Ethernet

This enables **USB-free installations**, ideal for remote setups or technical racks.

---

# 🏠 Home Assistant Integration

Entities are created automatically via **MQTT Auto-Discovery**:

* Sensors
* Numbers
* Selects
* Switches
* Binary sensors

No YAML configuration required.

---

# 🔄 Automatic synchronization

After each setting change:

* A burst read is triggered
* Parameters are verified
* Home Assistant always reflects the **real inverter state**

---

# 🔐 Robust & Reliable

* Automatic serial error handling
* Invalid command protection
* Serial queue (collision prevention)
* Automatic restart on failure
* Compatible with parallel systems

---

## 📄 Full parameter list

👉 [https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/PARAMETERS.md](https://github.com/tapion69/smart-voltronic/blob/main/smart-voltronic/PARAMETERS.md)

---

# 🛠️ Support & Suggestions

For bugs, issues, or feature requests, please open an **issue on the GitHub repository**.

---

# ❤️ Contribution

Open-source and evolving project.
Contributions and feedback are very welcome.

---

**Smart inverter control, fully integrated into Home Assistant 🚀**
