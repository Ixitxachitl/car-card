# Toyota Car Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/ixitxachitl/car-card?style=flat-square)](https://github.com/ixitxachitl/car-card/releases)

A custom Lovelace card that visualizes vehicle data from the [ha-toyota-na](https://github.com/widewing/ha-toyota-na) integration.

![Card Preview](preview.png)

## Features

- **Top-down car SVG** with door/hood/trunk open indicators
- **Fuel level** bar with color coding (green → orange → red)
- **EV battery level** and range (for hybrid/EV vehicles)
- **Tire pressures** displayed in a 2×2 grid with color-coded warnings
- **Door, window, and lock status** with summary badges
- **Odometer**, **speed**, and **next service** info chips
- Optional custom vehicle image
- Built-in visual config editor
- Fully themed — adapts to your HA theme (light/dark)

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance.
2. Go to **Frontend** → click the **⋮** menu → **Custom repositories**.
3. Add the repository URL (e.g. `https://github.com/ixitxachitl/car-card`) and select category **Dashboard**.
4. Search for "Toyota Car Card" and click **Install**.
5. Refresh your browser (Ctrl+F5).

### Manual

1. Download `toyota-car-card.js` from the [latest release](https://github.com/ixitxachitl/car-card/releases/latest).
2. Copy it into your Home Assistant `config/www/` directory.
3. Add the resource in **Settings → Dashboards → ⋮ → Resources**:
   - URL: `/local/toyota-car-card.js`
   - Type: JavaScript Module
4. Refresh your browser.

## Configuration

Add the card to a dashboard. You can use the visual editor or YAML. Each sensor is mapped individually via the `entities` key — pick only the ones you have.

```yaml
type: custom:toyota-car-card
title: My Toyota
entities:
  fuel_level: sensor.fuel_level_2024_camry
  odometer: sensor.odometer_2024_camry
  front_driver_tire: sensor.front_driver_tire_2024_camry
  front_passenger_tire: sensor.front_passenger_tire_2024_camry
  rear_driver_tire: sensor.rear_driver_tire_2024_camry
  rear_passenger_tire: sensor.rear_passenger_tire_2024_camry
```

### Full Options

| Option          | Type    | Default  | Description                                    |
|-----------------|---------|----------|------------------------------------------------|
| `type`          | string  | required | Must be `custom:toyota-car-card`               |
| `title`         | string  | `Toyota` | Card title                                     |
| `entities`      | object  | required | Map of sensor keys to entity IDs (see below)   |
| `image_url`     | string  | —        | Custom car image (`/local/car.png` or `https://...`) |
| `show_fuel`     | boolean | `true`   | Show fuel level bar                            |
| `show_odometer` | boolean | `true`   | Show odometer chip                             |
| `show_tires`    | boolean | `true`   | Show tire pressure grid                        |
| `show_doors`    | boolean | `true`   | Show door status                               |
| `show_windows`  | boolean | `true`   | Show window status                             |
| `show_locks`    | boolean | `true`   | Show lock status                               |
| `show_ev`       | boolean | `false`  | Show EV battery/range (for hybrids/EVs)        |
| `show_speed`    | boolean | `false`  | Show current speed                             |
| `show_service`  | boolean | `false`  | Show distance to next service                  |

### Entity Keys

Each key below can be mapped to any entity in your Home Assistant instance under `entities:`.

| Key | Expected Domain | Description |
|-----|----------------|-------------|
| `fuel_level` | sensor | Fuel level (%) |
| `distance_to_empty` | sensor | Distance to empty |
| `odometer` | sensor | Odometer reading |
| `speed` | sensor | Current speed |
| `next_service` | sensor | Distance to next service |
| `last_update_timestamp` | sensor | Last data update timestamp |
| `front_driver_tire` | sensor | Front driver tire pressure |
| `front_passenger_tire` | sensor | Front passenger tire pressure |
| `rear_driver_tire` | sensor | Rear driver tire pressure |
| `rear_passenger_tire` | sensor | Rear passenger tire pressure |
| `ev_battery_level` | sensor | EV battery level (%) |
| `ev_range` | sensor | EV range |
| `front_driver_door` | binary_sensor | Front driver door open/closed |
| `front_passenger_door` | binary_sensor | Front passenger door |
| `rear_driver_door` | binary_sensor | Rear driver door |
| `rear_passenger_door` | binary_sensor | Rear passenger door |
| `hood` | binary_sensor | Hood open/closed |
| `trunk` | binary_sensor | Trunk open/closed |
| `front_driver_window` | binary_sensor | Front driver window |
| `front_passenger_window` | binary_sensor | Front passenger window |
| `rear_driver_window` | binary_sensor | Rear driver window |
| `rear_passenger_window` | binary_sensor | Rear passenger window |
| `moonroof` | binary_sensor | Moonroof open/closed |
| `front_driver_door_lock` | binary_sensor | Front driver door lock |
| `front_passenger_door_lock` | binary_sensor | Front passenger door lock |
| `rear_driver_door_lock` | binary_sensor | Rear driver door lock |
| `rear_passenger_door_lock` | binary_sensor | Rear passenger door lock |
| `trunk_door_lock` | binary_sensor | Trunk lock |

### Example: Full Config

```yaml
type: custom:toyota-car-card
title: 2024 Camry
image_url: "/local/images/camry.png"
show_fuel: true
show_odometer: true
show_tires: true
show_doors: true
show_windows: true
show_locks: true
show_speed: true
show_service: true
entities:
  fuel_level: sensor.fuel_level_2024_camry
  distance_to_empty: sensor.distance_to_empty_2024_camry
  odometer: sensor.odometer_2024_camry
  speed: sensor.speed_2024_camry
  next_service: sensor.next_service_2024_camry
  last_update_timestamp: sensor.last_update_timestamp_2024_camry
  front_driver_tire: sensor.front_driver_tire_2024_camry
  front_passenger_tire: sensor.front_passenger_tire_2024_camry
  rear_driver_tire: sensor.rear_driver_tire_2024_camry
  rear_passenger_tire: sensor.rear_passenger_tire_2024_camry
  front_driver_door: binary_sensor.front_driver_door_2024_camry
  front_passenger_door: binary_sensor.front_passenger_door_2024_camry
  rear_driver_door: binary_sensor.rear_driver_door_2024_camry
  rear_passenger_door: binary_sensor.rear_passenger_door_2024_camry
  hood: binary_sensor.hood_2024_camry
  trunk: binary_sensor.trunk_2024_camry
  front_driver_door_lock: binary_sensor.front_driver_door_lock_2024_camry
  front_passenger_door_lock: binary_sensor.front_passenger_door_lock_2024_camry
  rear_driver_door_lock: binary_sensor.rear_driver_door_lock_2024_camry
  rear_passenger_door_lock: binary_sensor.rear_passenger_door_lock_2024_camry
  trunk_door_lock: binary_sensor.trunk_door_lock_2024_camry
```

### Example: EV / Hybrid

```yaml
type: custom:toyota-car-card
title: 2024 RAV4 Prime
show_ev: true
show_fuel: true
entities:
  fuel_level: sensor.fuel_level_2024_rav4_prime
  ev_battery_level: sensor.ev_battery_level_2024_rav4_prime
  ev_range: sensor.ev_range_2024_rav4_prime
  odometer: sensor.odometer_2024_rav4_prime
```

## License

MIT
