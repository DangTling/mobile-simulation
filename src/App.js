import "./App.scss";
import MobileDeviceFrame from "./components/MobileDeviceFrame";
import ScreenDisplay from "./components/ScreenDisplay";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ElectricMeter2 from "./views/ElectricMeter2";
import ReadConfigFiles from "./components/ReadConfigFiles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App d-flex justify-content-around">
        <ReadConfigFiles />
        <MobileDeviceFrame>
          <ScreenDisplay>
            <ElectricMeter2 />
          </ScreenDisplay>
        </MobileDeviceFrame>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
