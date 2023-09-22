import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComp } from "../redux/compSlice";
import { toast } from "react-toastify";

function ReadConfigFiles() {
  const [config, setConfig] = useState(null);
  const dispatch = useDispatch();
  const itemWantFix = useSelector((state) => state.itemWantFix);
  const indexWantFix = useSelector((state) => state.indexWantFix);

  useEffect(() => {
    if (config) {
      const newArr = config.detail.view.area.map((item, index) => {
        if (index === indexWantFix) {
          return itemWantFix;
        }
        return item;
      });
      config.detail.view.area = newArr;
      dispatch(setComp(config.detail.view.area));
    }
  }, [itemWantFix]);

  const handleChange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0], "UTF-8");
    reader.onload = (e) => {
      try {
        const parsedConfig = JSON.parse(e.target.result);
        setConfig(parsedConfig);
        dispatch(setComp(parsedConfig.detail.view.area));
      } catch (error) {
        console.error("Lỗi khi phân tích cú pháp JSON:", error);
      }
    };
  };

  const handleTextAreaChange = (e) => {
    try {
      const newConfig = JSON.parse(e.target.value);
      setConfig(newConfig);
      dispatch(setComp(newConfig.detail.view.area));
    } catch (error) {
      console.error("Lỗi khi phân tích cú pháp JSON:", error);

      toast.error(`Lỗi: ${error}`);
    }
  };

  return (
    <div className="col-3 mx-5 my-5">
      <button type="button" class="btn btn-success">
        <label htmlFor="file">Input Files</label>
      </button>
      <input type="file" id="file" required onChange={handleChange} hidden />
      {config && (
        <div className="text-black mb-3">
          <h2>Thông tin cấu hình:</h2>
          {/* <pre>{JSON.stringify(config, null, 2)}</pre> */}
          <textarea
            cols="10"
            rows="500"
            className="text-area"
            value={JSON.stringify(config, null, 2)}
            onChange={handleTextAreaChange}
          />
        </div>
      )}
    </div>
  );
}

export default ReadConfigFiles;
