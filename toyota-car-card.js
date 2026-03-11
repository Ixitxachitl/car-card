/**
 * Toyota Car Card for Home Assistant
 * Displays vehicle data from the ha-toyota-na integration
 * https://github.com/widewing/ha-toyota-na
 */

const CARD_VERSION = "1.0.0";

class ToyotaCarCard extends HTMLElement {
  static get properties() {
    return { hass: {}, config: {} };
  }

  set hass(hass) {
    this._hass = hass;
    if (this.shadowRoot) {
      this._render();
    }
  }

  setConfig(config) {
    if (!config.entity_prefix) {
      throw new Error("Please define entity_prefix (e.g. '2024_camry')");
    }
    this._config = {
      title: config.title || "Toyota",
      entity_prefix: config.entity_prefix,
      image_url: config.image_url || null,
      show_fuel: config.show_fuel !== false,
      show_odometer: config.show_odometer !== false,
      show_tires: config.show_tires !== false,
      show_doors: config.show_doors !== false,
      show_windows: config.show_windows !== false,
      show_locks: config.show_locks !== false,
      show_ev: config.show_ev || false,
      show_speed: config.show_speed || false,
      show_service: config.show_service || false,
      ...config,
    };

    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this._render();
  }

  getCardSize() {
    return 6;
  }

  _getEntityId(type, name) {
    return `${type}.${name}_${this._config.entity_prefix}`;
  }

  _getState(entityId) {
    if (!this._hass || !this._hass.states[entityId]) return null;
    return this._hass.states[entityId];
  }

  _getStateValue(entityId) {
    const state = this._getState(entityId);
    if (!state || state.state === "unavailable" || state.state === "unknown")
      return null;
    return state.state;
  }

  _formatNumber(val) {
    if (val === null || val === undefined) return "—";
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
  }

  _render() {
    if (!this._config || !this._hass) return;

    const p = this._config.entity_prefix;

    // Sensor entity IDs
    const fuelId = this._getEntityId("sensor", "fuel_level");
    const odometerId = this._getEntityId("sensor", "odometer");
    const distToEmptyId = this._getEntityId("sensor", "distance_to_empty");
    const speedId = this._getEntityId("sensor", "speed");
    const nextServiceId = this._getEntityId("sensor", "next_service");
    const lastUpdateId = this._getEntityId("sensor", "last_update_timestamp");

    // Tire entities
    const flTireId = this._getEntityId("sensor", "front_driver_tire");
    const frTireId = this._getEntityId("sensor", "front_passenger_tire");
    const rlTireId = this._getEntityId("sensor", "rear_driver_tire");
    const rrTireId = this._getEntityId("sensor", "rear_passenger_tire");

    // Door binary sensors
    const doorFL = this._getEntityId("binary_sensor", "front_driver_door");
    const doorFR = this._getEntityId("binary_sensor", "front_passenger_door");
    const doorRL = this._getEntityId("binary_sensor", "rear_driver_door");
    const doorRR = this._getEntityId("binary_sensor", "rear_passenger_door");

    // Window binary sensors
    const winFL = this._getEntityId("binary_sensor", "front_driver_window");
    const winFR = this._getEntityId("binary_sensor", "front_passenger_window");
    const winRL = this._getEntityId("binary_sensor", "rear_driver_window");
    const winRR = this._getEntityId("binary_sensor", "rear_passenger_window");
    const moonroof = this._getEntityId("binary_sensor", "moonroof");

    // Lock binary sensors
    const lockFL = this._getEntityId(
      "binary_sensor",
      "front_driver_door_lock"
    );
    const lockFR = this._getEntityId(
      "binary_sensor",
      "front_passenger_door_lock"
    );
    const lockRL = this._getEntityId(
      "binary_sensor",
      "rear_driver_door_lock"
    );
    const lockRR = this._getEntityId(
      "binary_sensor",
      "rear_passenger_door_lock"
    );
    const lockTrunk = this._getEntityId("binary_sensor", "trunk_door_lock");

    // Other binary sensors
    const hoodId = this._getEntityId("binary_sensor", "hood");
    const trunkId = this._getEntityId("binary_sensor", "trunk");

    // EV entities
    const evBatteryId = this._getEntityId("sensor", "ev_battery_level");
    const evRangeId = this._getEntityId("sensor", "ev_range");

    // Gather values
    const fuel = this._getStateValue(fuelId);
    const odometer = this._getStateValue(odometerId);
    const distToEmpty = this._getStateValue(distToEmptyId);
    const speed = this._getStateValue(speedId);
    const nextService = this._getStateValue(nextServiceId);
    const lastUpdate = this._getStateValue(lastUpdateId);

    const odometerUnit =
      this._getState(odometerId)?.attributes?.unit_of_measurement || "mi";
    const distToEmptyUnit =
      this._getState(distToEmptyId)?.attributes?.unit_of_measurement || "mi";

    const flTire = this._getStateValue(flTireId);
    const frTire = this._getStateValue(frTireId);
    const rlTire = this._getStateValue(rlTireId);
    const rrTire = this._getStateValue(rrTireId);

    const evBattery = this._getStateValue(evBatteryId);
    const evRange = this._getStateValue(evRangeId);
    const evRangeUnit =
      this._getState(evRangeId)?.attributes?.unit_of_measurement || "mi";

    // Door, window, lock states – "on" = open/unlocked, "off" = closed/locked
    const doors = [
      { name: "FL Door", state: this._getStateValue(doorFL) },
      { name: "FR Door", state: this._getStateValue(doorFR) },
      { name: "RL Door", state: this._getStateValue(doorRL) },
      { name: "RR Door", state: this._getStateValue(doorRR) },
      { name: "Hood", state: this._getStateValue(hoodId) },
      { name: "Trunk", state: this._getStateValue(trunkId) },
    ];

    const windows = [
      { name: "FL Win", state: this._getStateValue(winFL) },
      { name: "FR Win", state: this._getStateValue(winFR) },
      { name: "RL Win", state: this._getStateValue(winRL) },
      { name: "RR Win", state: this._getStateValue(winRR) },
      { name: "Moonroof", state: this._getStateValue(moonroof) },
    ];

    const locks = [
      { name: "FL", state: this._getStateValue(lockFL) },
      { name: "FR", state: this._getStateValue(lockFR) },
      { name: "RL", state: this._getStateValue(lockRL) },
      { name: "RR", state: this._getStateValue(lockRR) },
      { name: "Trunk", state: this._getStateValue(lockTrunk) },
    ];

    const allLocked = locks.every((l) => l.state === "off" || l.state === null);
    const allDoorsClosed = doors.every(
      (d) => d.state === "off" || d.state === null
    );
    const allWindowsClosed = windows.every(
      (w) => w.state === "off" || w.state === null
    );

    // Fuel bar color
    const fuelNum = parseFloat(fuel);
    let fuelColor = "var(--ccc-ok, #4caf50)";
    if (!isNaN(fuelNum)) {
      if (fuelNum <= 15) fuelColor = "var(--ccc-critical, #f44336)";
      else if (fuelNum <= 30) fuelColor = "var(--ccc-warning, #ff9800)";
    }

    // Tire pressure color helper
    const tireColor = (val) => {
      if (val === null) return "var(--secondary-text-color, #888)";
      const v = parseFloat(val);
      if (isNaN(v)) return "var(--secondary-text-color, #888)";
      if (v < 28 || v > 38) return "var(--ccc-critical, #f44336)";
      if (v < 30 || v > 36) return "var(--ccc-warning, #ff9800)";
      return "var(--ccc-ok, #4caf50)";
    };

    // Build HTML
    const imageSection = this._config.image_url
      ? `<div class="car-image">
           <img src="${this._encodeImageUrl(this._config.image_url)}" alt="Vehicle" />
         </div>`
      : `<div class="car-image">
           ${this._renderCarSVG(doors, locks)}
         </div>`;

    const fuelSection =
      this._config.show_fuel && fuel !== null
        ? `<div class="stat-row fuel-row">
             <div class="stat-icon"><ha-icon icon="mdi:gas-station"></ha-icon></div>
             <div class="stat-bar-container">
               <div class="stat-bar" style="width: ${Math.min(fuelNum, 100)}%; background: ${fuelColor};"></div>
             </div>
             <div class="stat-value">${this._formatNumber(fuel)}%</div>
           </div>
           ${
             distToEmpty !== null
               ? `<div class="stat-detail">
                    <ha-icon icon="mdi:map-marker-distance"></ha-icon>
                    <span>${this._formatNumber(distToEmpty)} ${this._escapeHtml(distToEmptyUnit)} to empty</span>
                  </div>`
               : ""
           }`
        : "";

    const evSection =
      this._config.show_ev && evBattery !== null
        ? `<div class="stat-row fuel-row">
             <div class="stat-icon"><ha-icon icon="mdi:ev-station"></ha-icon></div>
             <div class="stat-bar-container">
               <div class="stat-bar" style="width: ${Math.min(parseFloat(evBattery), 100)}%; background: ${fuelColor};"></div>
             </div>
             <div class="stat-value">${this._formatNumber(evBattery)}%</div>
           </div>
           ${
             evRange !== null
               ? `<div class="stat-detail">
                    <ha-icon icon="mdi:map-marker-distance"></ha-icon>
                    <span>${this._formatNumber(evRange)} ${this._escapeHtml(evRangeUnit)} EV range</span>
                  </div>`
               : ""
           }`
        : "";

    const odometerSection =
      this._config.show_odometer && odometer !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:counter"></ha-icon>
             <span>${this._formatNumber(odometer)} ${this._escapeHtml(odometerUnit)}</span>
           </div>`
        : "";

    const speedSection =
      this._config.show_speed && speed !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:speedometer"></ha-icon>
             <span>${this._formatNumber(speed)} km/h</span>
           </div>`
        : "";

    const serviceSection =
      this._config.show_service && nextService !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:wrench-clock"></ha-icon>
             <span>${this._formatNumber(nextService)} ${this._escapeHtml(odometerUnit)}</span>
           </div>`
        : "";

    const tireSection =
      this._config.show_tires
        ? `<div class="tire-grid">
             <div class="tire-label">Tire Pressure (psi)</div>
             <div class="tire-row">
               <div class="tire" style="color: ${tireColor(flTire)}">
                 <span class="tire-pos">FL</span>
                 <span class="tire-val">${this._formatNumber(flTire)}</span>
               </div>
               <div class="tire" style="color: ${tireColor(frTire)}">
                 <span class="tire-pos">FR</span>
                 <span class="tire-val">${this._formatNumber(frTire)}</span>
               </div>
             </div>
             <div class="tire-row">
               <div class="tire" style="color: ${tireColor(rlTire)}">
                 <span class="tire-pos">RL</span>
                 <span class="tire-val">${this._formatNumber(rlTire)}</span>
               </div>
               <div class="tire" style="color: ${tireColor(rrTire)}">
                 <span class="tire-pos">RR</span>
                 <span class="tire-val">${this._formatNumber(rrTire)}</span>
               </div>
             </div>
           </div>`
        : "";

    const doorSection =
      this._config.show_doors
        ? `<div class="status-group">
             <div class="status-header">
               <ha-icon icon="mdi:car-door"></ha-icon>
               <span>Doors</span>
               <span class="status-badge ${allDoorsClosed ? "ok" : "warn"}">${allDoorsClosed ? "All Closed" : "Open"}</span>
             </div>
             ${
               !allDoorsClosed
                 ? `<div class="status-items">${doors
                     .filter((d) => d.state === "on")
                     .map(
                       (d) =>
                         `<span class="status-item warn">${this._escapeHtml(d.name)}</span>`
                     )
                     .join("")}</div>`
                 : ""
             }
           </div>`
        : "";

    const windowSection =
      this._config.show_windows
        ? `<div class="status-group">
             <div class="status-header">
               <ha-icon icon="mdi:car-windshield-outline"></ha-icon>
               <span>Windows</span>
               <span class="status-badge ${allWindowsClosed ? "ok" : "warn"}">${allWindowsClosed ? "All Closed" : "Open"}</span>
             </div>
             ${
               !allWindowsClosed
                 ? `<div class="status-items">${windows
                     .filter((w) => w.state === "on")
                     .map(
                       (w) =>
                         `<span class="status-item warn">${this._escapeHtml(w.name)}</span>`
                     )
                     .join("")}</div>`
                 : ""
             }
           </div>`
        : "";

    const lockSection =
      this._config.show_locks
        ? `<div class="status-group">
             <div class="status-header">
               <ha-icon icon="mdi:${allLocked ? "lock" : "lock-open-variant"}"></ha-icon>
               <span>Locks</span>
               <span class="status-badge ${allLocked ? "ok" : "warn"}">${allLocked ? "Locked" : "Unlocked"}</span>
             </div>
             ${
               !allLocked
                 ? `<div class="status-items">${locks
                     .filter((l) => l.state === "on")
                     .map(
                       (l) =>
                         `<span class="status-item warn">${this._escapeHtml(l.name)}</span>`
                     )
                     .join("")}</div>`
                 : ""
             }
           </div>`
        : "";

    this.shadowRoot.innerHTML = `
      <ha-card>
        <style>
          :host {
            --ccc-ok: #4caf50;
            --ccc-warning: #ff9800;
            --ccc-critical: #f44336;
          }
          ha-card {
            padding: 16px;
            overflow: hidden;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .header .title {
            font-size: 1.2em;
            font-weight: 500;
            color: var(--primary-text-color);
          }
          .header .last-update {
            font-size: 0.75em;
            color: var(--secondary-text-color);
            opacity: 0.7;
          }
          .car-image {
            display: flex;
            justify-content: center;
            margin: 8px 0 16px 0;
          }
          .car-image img {
            max-width: 100%;
            max-height: 160px;
            object-fit: contain;
            border-radius: 8px;
          }
          .car-image svg {
            max-width: 320px;
            width: 100%;
            height: auto;
          }

          /* Fuel / EV bar */
          .fuel-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 4px;
          }
          .stat-icon {
            flex-shrink: 0;
            color: var(--secondary-text-color);
            --mdc-icon-size: 20px;
          }
          .stat-bar-container {
            flex: 1;
            height: 10px;
            background: var(--divider-color, #e0e0e0);
            border-radius: 5px;
            overflow: hidden;
          }
          .stat-bar {
            height: 100%;
            border-radius: 5px;
            transition: width 0.5s ease;
          }
          .stat-value {
            font-weight: 600;
            font-size: 0.95em;
            min-width: 42px;
            text-align: right;
            color: var(--primary-text-color);
          }
          .stat-detail {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8em;
            color: var(--secondary-text-color);
            margin: 2px 0 10px 30px;
            --mdc-icon-size: 16px;
          }

          /* Info chips */
          .info-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 12px 0;
          }
          .info-chip {
            display: flex;
            align-items: center;
            gap: 6px;
            background: var(--card-background-color, var(--ha-card-background, #f5f5f5));
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 16px;
            padding: 4px 12px;
            font-size: 0.85em;
            color: var(--primary-text-color);
            --mdc-icon-size: 18px;
          }

          /* Tire grid */
          .tire-grid {
            margin: 14px 0;
          }
          .tire-label {
            font-size: 0.78em;
            color: var(--secondary-text-color);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            text-align: center;
          }
          .tire-row {
            display: flex;
            justify-content: center;
            gap: 80px;
            margin-bottom: 6px;
          }
          .tire {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 50px;
          }
          .tire-pos {
            font-size: 0.7em;
            text-transform: uppercase;
            opacity: 0.7;
          }
          .tire-val {
            font-size: 1.3em;
            font-weight: 700;
          }

          /* Status groups */
          .status-sections {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 10px;
          }
          .status-group {
            background: var(--card-background-color, var(--ha-card-background, #f5f5f5));
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 10px;
            padding: 10px 14px;
          }
          .status-header {
            display: flex;
            align-items: center;
            gap: 8px;
            --mdc-icon-size: 20px;
            color: var(--primary-text-color);
            font-size: 0.9em;
          }
          .status-header span:first-of-type {
            flex: 1;
            font-weight: 500;
          }
          .status-badge {
            font-size: 0.75em;
            font-weight: 600;
            padding: 2px 10px;
            border-radius: 12px;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }
          .status-badge.ok {
            background: rgba(76,175,80,0.15);
            color: var(--ccc-ok);
          }
          .status-badge.warn {
            background: rgba(255,152,0,0.15);
            color: var(--ccc-warning);
          }
          .status-items {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 8px;
          }
          .status-item {
            font-size: 0.78em;
            padding: 2px 8px;
            border-radius: 8px;
          }
          .status-item.warn {
            background: rgba(255,152,0,0.12);
            color: var(--ccc-warning);
          }

          /* SVG Car Styles */
          .car-body { fill: var(--primary-text-color); opacity: 0.08; }
          .car-outline { fill: none; stroke: var(--primary-text-color); stroke-width: 2; opacity: 0.5; }
          .car-wheel { fill: var(--primary-text-color); opacity: 0.18; }
          .car-window { fill: var(--primary-color, #03a9f4); opacity: 0.15; }
          .car-door-open { stroke: var(--ccc-warning); stroke-width: 2.5; fill: none; }
          .car-door-closed { stroke: var(--ccc-ok); stroke-width: 1; fill: none; opacity: 0.3; }
          .car-lock-icon { font-size: 10px; }
        </style>

        <div class="header">
          <span class="title">${this._escapeHtml(this._config.title)}</span>
          ${lastUpdate ? `<span class="last-update">Updated: ${this._formatTimestamp(lastUpdate)}</span>` : ""}
        </div>

        ${imageSection}
        ${fuelSection}
        ${evSection}

        <div class="info-chips">
          ${odometerSection}
          ${speedSection}
          ${serviceSection}
        </div>

        ${tireSection}

        <div class="status-sections">
          ${lockSection}
          ${doorSection}
          ${windowSection}
        </div>
      </ha-card>
    `;
  }

  _escapeHtml(str) {
    if (typeof str !== "string") return str;
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  _encodeImageUrl(url) {
    // Only allow http/https/local HA URLs
    if (typeof url !== "string") return "";
    if (
      url.startsWith("/local/") ||
      url.startsWith("/api/") ||
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return this._escapeHtml(url);
    }
    return "";
  }

  _formatTimestamp(ts) {
    if (!ts) return "";
    const d = new Date(Number(ts) * 1000);
    if (isNaN(d.getTime())) {
      // Try as ISO string
      const d2 = new Date(ts);
      if (isNaN(d2.getTime())) return ts;
      return d2.toLocaleString();
    }
    return d.toLocaleString();
  }

  _renderCarSVG(doors, locks) {
    // Top-down car SVG
    const doorFL = doors.find((d) => d.name === "FL Door");
    const doorFR = doors.find((d) => d.name === "FR Door");
    const doorRL = doors.find((d) => d.name === "RL Door");
    const doorRR = doors.find((d) => d.name === "RR Door");
    const hood = doors.find((d) => d.name === "Hood");
    const trunk = doors.find((d) => d.name === "Trunk");

    const doorClass = (d) =>
      d && d.state === "on" ? "car-door-open" : "car-door-closed";

    return `
      <svg viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg">
        <!-- Car body -->
        <rect class="car-body" x="45" y="50" width="110" height="280" rx="35" ry="40"/>
        <rect class="car-outline" x="45" y="50" width="110" height="280" rx="35" ry="40"/>

        <!-- Windows -->
        <rect class="car-window" x="60" y="90" width="80" height="55" rx="12"/>
        <rect class="car-window" x="60" y="225" width="80" height="55" rx="12"/>

        <!-- Wheels -->
        <rect class="car-wheel" x="32" y="95" width="18" height="45" rx="7"/>
        <rect class="car-wheel" x="150" y="95" width="18" height="45" rx="7"/>
        <rect class="car-wheel" x="32" y="240" width="18" height="45" rx="7"/>
        <rect class="car-wheel" x="150" y="240" width="18" height="45" rx="7"/>

        <!-- Headlights -->
        <ellipse cx="65" cy="60" rx="10" ry="5" fill="#ffd54f" opacity="0.5"/>
        <ellipse cx="135" cy="60" rx="10" ry="5" fill="#ffd54f" opacity="0.5"/>

        <!-- Taillights -->
        <ellipse cx="65" cy="320" rx="10" ry="5" fill="#ef5350" opacity="0.4"/>
        <ellipse cx="135" cy="320" rx="10" ry="5" fill="#ef5350" opacity="0.4"/>

        <!-- Door indicators -->
        <!-- FL Door (driver front - left side going forward) -->
        <line class="${doorClass(doorFL)}" x1="45" y1="105" x2="30" y2="90" />
        <line class="${doorClass(doorFL)}" x1="45" y1="135" x2="30" y2="145" />
        ${doorFL?.state === "on" ? '<line class="car-door-open" x1="30" y1="90" x2="30" y2="145"/>' : ""}

        <!-- FR Door (passenger front - right side) -->
        <line class="${doorClass(doorFR)}" x1="155" y1="105" x2="170" y2="90" />
        <line class="${doorClass(doorFR)}" x1="155" y1="135" x2="170" y2="145" />
        ${doorFR?.state === "on" ? '<line class="car-door-open" x1="170" y1="90" x2="170" y2="145"/>' : ""}

        <!-- RL Door (driver rear - left side) -->
        <line class="${doorClass(doorRL)}" x1="45" y1="245" x2="30" y2="235" />
        <line class="${doorClass(doorRL)}" x1="45" y1="275" x2="30" y2="285" />
        ${doorRL?.state === "on" ? '<line class="car-door-open" x1="30" y1="235" x2="30" y2="285"/>' : ""}

        <!-- RR Door (passenger rear - right side) -->
        <line class="${doorClass(doorRR)}" x1="155" y1="245" x2="170" y2="235" />
        <line class="${doorClass(doorRR)}" x1="155" y1="275" x2="170" y2="285" />
        ${doorRR?.state === "on" ? '<line class="car-door-open" x1="170" y1="235" x2="170" y2="285"/>' : ""}

        <!-- Hood indicator -->
        ${hood?.state === "on" ? '<line class="car-door-open" x1="75" y1="55" x2="75" y2="30"/><line class="car-door-open" x1="125" y1="55" x2="125" y2="30"/><line class="car-door-open" x1="75" y1="30" x2="125" y2="30"/>' : ""}

        <!-- Trunk indicator -->
        ${trunk?.state === "on" ? '<line class="car-door-open" x1="75" y1="325" x2="75" y2="350"/><line class="car-door-open" x1="125" y1="325" x2="125" y2="350"/><line class="car-door-open" x1="75" y1="350" x2="125" y2="350"/>' : ""}

        <!-- Labels -->
        <text x="100" y="25" text-anchor="middle" fill="var(--secondary-text-color)" font-size="11" opacity="0.7">FRONT</text>
        <text x="100" y="370" text-anchor="middle" fill="var(--secondary-text-color)" font-size="11" opacity="0.7">REAR</text>
      </svg>
    `;
  }

  static getConfigElement() {
    return document.createElement("toyota-car-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Toyota",
      entity_prefix: "2024_camry",
    };
  }
}

// ── Visual card editor ──
class ToyotaCarCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
  }

  _render() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    this.shadowRoot.innerHTML = `
      <style>
        .editor { padding: 16px; }
        .editor label { display: block; margin: 10px 0 4px; font-weight: 500; font-size: 0.9em; }
        .editor input[type="text"] {
          width: 100%; padding: 8px; box-sizing: border-box;
          border: 1px solid var(--divider-color, #ccc); border-radius: 6px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
        }
        .editor .toggle-row { display: flex; align-items: center; justify-content: space-between; margin: 6px 0; }
        .editor .toggle-row span { font-size: 0.85em; }
        .editor .hint { font-size: 0.75em; color: var(--secondary-text-color); margin-top: 2px; }
      </style>
      <div class="editor">
        <label>Title</label>
        <input type="text" id="title" value="${this._escapeAttr(this._config.title || "")}" />

        <label>Entity Prefix</label>
        <input type="text" id="entity_prefix" value="${this._escapeAttr(this._config.entity_prefix || "")}" />
        <div class="hint">The suffix of your sensor entity IDs, e.g. "2024_camry" if entities are sensor.fuel_level_2024_camry</div>

        <label>Vehicle Image URL (optional)</label>
        <input type="text" id="image_url" value="${this._escapeAttr(this._config.image_url || "")}" />
        <div class="hint">Use /local/your-car.png or an https:// URL</div>

        ${this._toggleRow("show_fuel", "Show Fuel Level", this._config.show_fuel !== false)}
        ${this._toggleRow("show_odometer", "Show Odometer", this._config.show_odometer !== false)}
        ${this._toggleRow("show_tires", "Show Tire Pressures", this._config.show_tires !== false)}
        ${this._toggleRow("show_doors", "Show Doors", this._config.show_doors !== false)}
        ${this._toggleRow("show_windows", "Show Windows", this._config.show_windows !== false)}
        ${this._toggleRow("show_locks", "Show Locks", this._config.show_locks !== false)}
        ${this._toggleRow("show_ev", "Show EV Info", this._config.show_ev || false)}
        ${this._toggleRow("show_speed", "Show Speed", this._config.show_speed || false)}
        ${this._toggleRow("show_service", "Show Next Service", this._config.show_service || false)}
      </div>
    `;

    // Bind events
    this.shadowRoot.getElementById("title").addEventListener("change", (e) => {
      this._updateConfig("title", e.target.value);
    });
    this.shadowRoot
      .getElementById("entity_prefix")
      .addEventListener("change", (e) => {
        this._updateConfig("entity_prefix", e.target.value);
      });
    this.shadowRoot
      .getElementById("image_url")
      .addEventListener("change", (e) => {
        this._updateConfig("image_url", e.target.value);
      });
    this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener("change", (e) => {
        this._updateConfig(e.target.dataset.key, e.target.checked);
      });
    });
  }

  _toggleRow(key, label, checked) {
    return `<div class="toggle-row">
      <span>${label}</span>
      <input type="checkbox" data-key="${key}" ${checked ? "checked" : ""} />
    </div>`;
  }

  _updateConfig(key, value) {
    this._config = { ...this._config, [key]: value };
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _escapeAttr(s) {
    if (typeof s !== "string") return "";
    return s
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}

customElements.define("toyota-car-card", ToyotaCarCard);
customElements.define("toyota-car-card-editor", ToyotaCarCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "toyota-car-card",
  name: "Toyota Car Card",
  description:
    "A visual card for Toyota vehicles using the ha-toyota-na integration",
  preview: true,
  documentationURL: "https://github.com/widewing/ha-toyota-na",
});

console.info(
  `%c TOYOTA-CAR-CARD %c v${CARD_VERSION} `,
  "background: #ef5350; color: white; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "background: #333; color: white; padding: 2px 6px; border-radius: 0 4px 4px 0;"
);
