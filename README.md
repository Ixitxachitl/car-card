# Toyota Car Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/ixitxachitl/car-card?style=flat-square)](https://github.com/ixitxachitl/car-card/releases)

A custom Lovelace card that visualizes vehicle data from the [ha-toyota-na](https://github.com/widewing/ha-toyota-na) integration.

![Card Preview](preview.png)

## Features

- **Side-by-side layout** — vehicle info on left, live map on right
- **Top-down truck SVG** with interactive overlays for doors, windows, locks, hood, trunk, and moonroof
- **Fuel level** bar with color coding (green → orange → red) and distance-to-empty
- **EV battery level** and range (for hybrid/EV vehicles)
- **Tire pressures** overlaid on the vehicle image with color-coded warnings
- **Door, window, and lock status** indicators positioned on the vehicle
- **Odometer**, **speed**, and **next service** info chips
- **Embedded map** with current location, last parked location, and 24-hour history trail
- **Reverse geocoding** — shows a street address with Google Maps link when the vehicle is away from home
- **Action buttons** — Lock/Unlock, Engine Start/Stop, Hazards On/Off, Refresh
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
vehicle: <your-toyota-device-id>
entities:
  fuel_level: sensor.fuel_level_2024_camry
  odometer: sensor.odometer_2024_camry
  current_location: device_tracker.current_location_2024_camry
  front_driver_tire: sensor.front_driver_tire_2024_camry
  front_passenger_tire: sensor.front_passenger_tire_2024_camry
  rear_driver_tire: sensor.rear_driver_tire_2024_camry
  rear_passenger_tire: sensor.rear_passenger_tire_2024_camry
```

### Full Options

| Option | Type | Default | Description |
|---|---|---|---|
| `type` | string | required | Must be `custom:toyota-car-card` |
| `title` | string | `Toyota` | Card title |
| `entities` | object | required | Map of sensor keys to entity IDs (see below) |
| `image_url` | string | — | Custom car image (`/local/car.png` or `https://...`) |
| `vehicle` | string | — | Device ID from the `toyota_na` integration (required for action buttons) |
| `lock_entity` | string | — | Entity ID of a `lock.*` entity for the lock/unlock button |
| `engine_status_entity` | string | — | Entity ID of a `binary_sensor.*` to read engine running state |
| `show_fuel` | boolean | `true` | Show fuel level bar |
| `show_odometer` | boolean | `true` | Show odometer chip |
| `show_tires` | boolean | `true` | Show tire pressure overlays |
| `show_doors` | boolean | `true` | Show door/hood/trunk status |
| `show_windows` | boolean | `true` | Show window/moonroof status |
| `show_locks` | boolean | `true` | Show lock status |
| `show_map` | boolean | `true` | Show embedded map (side-by-side with vehicle info) |
| `show_buttons` | boolean | `true` | Show action buttons |
| `show_ev` | boolean | `false` | Show EV battery/range (for hybrids/EVs) |
| `show_speed` | boolean | `false` | Show current speed |
| `show_service` | boolean | `false` | Show distance to next service |

### Entity Keys

Each key below can be mapped to any entity in your Home Assistant instance under `entities:`.

| Key | Domain | Description |
|---|---|---|
| **Fuel & Range** | | |
| `fuel_level` | sensor | Fuel level (%) |
| `distance_to_empty` | sensor | Distance to empty |
| **General** | | |
| `odometer` | sensor | Odometer reading |
| `speed` | sensor | Current speed |
| `next_service` | sensor | Distance to next service |
| `last_update_timestamp` | sensor | Last data update timestamp |
| **Tires** | | |
| `front_driver_tire` | sensor | Front driver tire pressure |
| `front_passenger_tire` | sensor | Front passenger tire pressure |
| `rear_driver_tire` | sensor | Rear driver tire pressure |
| `rear_passenger_tire` | sensor | Rear passenger tire pressure |
| **EV** | | |
| `ev_battery_level` | sensor | EV battery level (%) |
| `ev_range` | sensor | EV range |
| **Doors** | | |
| `front_driver_door` | binary_sensor | Front driver door open/closed |
| `front_passenger_door` | binary_sensor | Front passenger door |
| `rear_driver_door` | binary_sensor | Rear driver door |
| `rear_passenger_door` | binary_sensor | Rear passenger door |
| `hood` | binary_sensor | Hood open/closed |
| `trunk` | binary_sensor | Trunk open/closed |
| **Windows** | | |
| `front_driver_window` | binary_sensor | Front driver window |
| `front_passenger_window` | binary_sensor | Front passenger window |
| `rear_driver_window` | binary_sensor | Rear driver window |
| `rear_passenger_window` | binary_sensor | Rear passenger window |
| `moonroof` | binary_sensor | Moonroof open/closed |
| **Locks** | | |
| `front_driver_door_lock` | binary_sensor | Front driver door lock |
| `front_passenger_door_lock` | binary_sensor | Front passenger door lock |
| `rear_driver_door_lock` | binary_sensor | Rear driver door lock |
| `rear_passenger_door_lock` | binary_sensor | Rear passenger door lock |
| `trunk_door_lock` | binary_sensor | Trunk lock |
| **Location** | | |
| `current_location` | device_tracker | Current vehicle location (shown on map with 24h history) |
| `last_parked_location` | device_tracker | Last parked location (shown on map) |

### Action Buttons

The card includes built-in action buttons that call [ha-toyota-na](https://github.com/widewing/ha-toyota-na) services. These require the `vehicle` config option (device ID from the toyota_na integration).

| Button | Service | Notes |
|---|---|---|
| **Lock/Unlock Doors** | `lock.lock` / `lock.unlock` | Requires `lock_entity` config; toggles based on current state |
| **Start/Stop Engine** | `toyota_na.engine_start` / `toyota_na.engine_stop` | Toggles based on `engine_status_entity` state |
| **Hazards On** | `toyota_na.hazards_on` | Turns on hazard lights |
| **Hazards Off** | `toyota_na.hazards_off` | Turns off hazard lights |
| **Refresh** | `toyota_na.refresh` | Polls the vehicle for updated data |

### Map

When `show_map` is enabled and location entities are configured, an embedded map is displayed to the right of the vehicle info. Features:

- **Current location pin** with a **24-hour history trail** showing where the vehicle has been
- **Last parked location** pin with a parking icon
- **Reverse geocoding** — when the vehicle is not in a named zone (e.g., away from "Home"), the card resolves the coordinates to a street address via OpenStreetMap and displays it as a clickable Google Maps link
- Geocode results are cached to minimize API calls

### Example: Full Config

```yaml
type: custom:toyota-car-card
title: 2024 Camry
vehicle: <your-toyota-device-id>
lock_entity: lock.2024_camry
engine_status_entity: binary_sensor.engine_status_2024_camry
image_url: "/local/images/camry.png"
show_fuel: true
show_odometer: true
show_tires: true
show_doors: true
show_windows: true
show_locks: true
show_speed: true
show_service: true
show_map: true
show_buttons: true
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
  front_driver_window: binary_sensor.front_driver_window_2024_camry
  front_passenger_window: binary_sensor.front_passenger_window_2024_camry
  rear_driver_window: binary_sensor.rear_driver_window_2024_camry
  rear_passenger_window: binary_sensor.rear_passenger_window_2024_camry
  moonroof: binary_sensor.moonroof_2024_camry
  front_driver_door_lock: binary_sensor.front_driver_door_lock_2024_camry
  front_passenger_door_lock: binary_sensor.front_passenger_door_lock_2024_camry
  rear_driver_door_lock: binary_sensor.rear_driver_door_lock_2024_camry
  rear_passenger_door_lock: binary_sensor.rear_passenger_door_lock_2024_camry
  trunk_door_lock: binary_sensor.trunk_door_lock_2024_camry
  current_location: device_tracker.current_location_2024_camry
  last_parked_location: device_tracker.last_parked_location_2024_camry
```

### Example: EV / Hybrid

```yaml
type: custom:toyota-car-card
title: 2024 RAV4 Prime
vehicle: <your-toyota-device-id>
show_ev: true
show_fuel: true
entities:
  fuel_level: sensor.fuel_level_2024_rav4_prime
  ev_battery_level: sensor.ev_battery_level_2024_rav4_prime
  ev_range: sensor.ev_range_2024_rav4_prime
  odometer: sensor.odometer_2024_rav4_prime
  current_location: device_tracker.current_location_2024_rav4_prime
```

## License

MIT
