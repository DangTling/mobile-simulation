import { useState } from "react";
import { useDispatch } from "react-redux";
import { setComp } from "../redux/compSlice";
import { toast } from "react-toastify";

function ReadConfigFiles() {
  const [config, setConfig] = useState(null);
  const dispatch = useDispatch();

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

  // function safeJsonParse(inputString) {
  //   let remainingString = inputString;

  //   try {
  //     let parsedJson = JSON.parse(remainingString);
  //     return parsedJson;
  //   } catch (error) {
  //     if (error instanceof SyntaxError) {
  //       // Xác định vị trí bắt đầu của object JSON lỗi
  //       const startIndex = inputString.lastIndexOf("{", error.at - 1);
  //       const endIndex = inputString.indexOf("}", error.at - 1);

  //       if (startIndex >= 0 && endIndex >= 0) {
  //         // Xóa bỏ phần object JSON lỗi
  //         remainingString =
  //           inputString.substring(0, startIndex) +
  //           inputString.substring(endIndex + 1);
  //         return safeJsonParse(remainingString);
  //       }
  //     }

  //     // Nếu không còn gì để parse hoặc không tìm thấy object JSON lỗi, trả về giá trị mặc định
  //     return {};
  //   }
  // }

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
