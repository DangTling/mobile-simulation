import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopSection() {
  return (
    <div className="top-section">
      <div className="time">10:00</div>
      <div className="camera"></div>

      <div className="status-bar">
        <div className="signal-icon">
          <FontAwesomeIcon icon="fa-solid fa-signal" />
        </div>
        <div className="wifi-icon">
          <FontAwesomeIcon icon="fa-solid fa-wifi" />
        </div>
        <div className="battery-icon">
          <FontAwesomeIcon icon="fa-solid fa-battery-full" />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
