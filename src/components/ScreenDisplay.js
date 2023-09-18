import "../assets/styles/ScreenDisplay.scss";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

function ScreenDisplay({ children }) {
  return (
    <div className="screen-display">
      <TopSection />
      {children}
      <BottomSection />
    </div>
  );
}

export default ScreenDisplay;
