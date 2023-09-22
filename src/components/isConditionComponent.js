import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Image from "./Image";
import Text from "./Text";
import { setIndexWantFix } from "../redux/indexWantFix";
import { setItemWantFix } from "../redux/itemWantFix";

function IsConditionComponent(props) {
  let status = useSelector((state) => state.valueOfOn_Off);
  const [displayed, setDisplayed] = useState(false);
  const dispatch = useDispatch();
  const itemWantFix = useSelector((state) => state.itemWantFix);
  const handleClick = (item, index) => {
    setDisplayed(true);
    dispatch(setItemWantFix(item));
    dispatch(setIndexWantFix(props.ind));
  };
  const handleChange = (e) => {
    try {
      const newItem = JSON.parse(e.target.value);
      dispatch(setItemWantFix(newItem));
    } catch (error) {
      console.log("Wait for it!");
    }
  };
  const handleSubmit = () => {
    setDisplayed(false);
  };

  return (
    <>
      {props.mapItem.map((item, index) => {
        if (item.value !== undefined) {
          if (status === false && item.value === "true") {
            if (item.item.type === "image") {
              return (
                <Image
                  key={index}
                  x={item.item.x}
                  y={item.item.y}
                  width={item.item.width}
                  height={item.item.height}
                  zIndex={props.zIndex}
                  resizeMode={
                    item.item.image_style.resizeMode === "stretch"
                      ? ""
                      : "contain"
                  }
                  alignItems={
                    item.item.style && item.item.style.alignItems
                      ? item.item.style.alignItems
                      : ""
                  }
                  uri={item.item.map_data[item.item.value].uri}
                />
              );
            } else if (item.item.type === "text") {
              return (
                <Text
                  x={item.item.x}
                  y={item.item.y}
                  width={item.item.width}
                  height={item.item.height}
                  value={item.item.value}
                  fontSize={`${item.item.fontSize}px`}
                  color={item.item.text_style.color}
                  fontWeight={item.item.text_style.fontWeight}
                  zIndex={props.zIndex}
                  backgroundColor={
                    item.item.style && item.item.style.backgroundColor
                      ? item.item.style.backgroundColor
                      : ""
                  }
                  alignItems={item.item.style.alignItems}
                />
              );
            }
          } else if (status === true && item.value === "false") {
            if (item.item.type === "image") {
              return (
                <Image
                  key={index}
                  x={item.item.x}
                  y={item.item.y}
                  width={item.item.width}
                  height={item.item.height}
                  zIndex={props.zIndex}
                  resizeMode={
                    item.item.image_style.resizeMode === "stretch"
                      ? ""
                      : "contain"
                  }
                  alignItems={
                    item.item.style && item.item.style.alignItems
                      ? item.item.style.alignItems
                      : ""
                  }
                  uri={
                    item.item.map_data[item.item.value].uri
                      ? item.item.map_data[item.item.value].uri
                      : ""
                  }
                  onClick={() => handleClick(item.item, index)}
                />
              );
            } else if (item.item.type === "text") {
              return (
                <Text
                  x={item.item.x}
                  y={item.item.y}
                  width={item.item.width}
                  height={item.item.height}
                  value={item.item.value}
                  fontSize={`${item.item.fontSize}px`}
                  color={item.item.text_style.color}
                  fontWeight={item.item.text_style.fontWeight}
                  zIndex={props.zIndex}
                  backgroundColor={
                    item.item.style && item.item.style.backgroundColor
                      ? item.item.style.backgroundColor
                      : ""
                  }
                  alignItems={item.item.style.alignItems}
                  onClick={() => handleClick(item.item, index)}
                />
              );
            }
          }
        }
        // else {
        //   console.log(1);
        //   if (item.item.type === "image") {
        //     return (
        //       <Image
        //         x={item.item.x}
        //         y={item.item.y}
        //         width={item.item.width}
        //         height={item.item.height}
        //         uri={item.item.map_data[item.item.value].uri}
        //         zIndex={props.zIndex}
        //         resizeMode={
        //           item.item.image_style.resizeMode === "stretch"
        //             ? ""
        //             : "contain"
        //         }
        //         alignItems={
        //           item.item.style && item.item.style.alignItems
        //             ? item.item.style.alignItems
        //             : ""
        //         }
        //       />
        //     );
        //   } else if (item.item.type === "text") {
        //     return (
        //       <Text
        //         x={item.item.x}
        //         y={item.item.y}
        //         width={item.item.width}
        //         height={item.item.height}
        //         value={item.item.value}
        //         fontSize={`${item.item.fontSize}px`}
        //         color={item.item.text_style.color}
        //         fontWeight={item.item.text_style.fontWeight}
        //         zIndex={props.zIndex}
        //         backgroundColor={
        //           item.item.style && item.item.style.backgroundColor
        //             ? item.item.style.backgroundColor
        //             : ""
        //         }
        //         alignItems={item.item.style.alignItems}
        //       />
        //     );
        //   }
        // }

        return null;
      })}
      {displayed && (
        <>
          <textarea
            className={`textBox ${displayed ? "scaled" : ""}`}
            onChange={handleChange}
          >
            {JSON.stringify(itemWantFix, null, 2)}
          </textarea>
          <button
            className={`btn btn-danger ${displayed ? "scaled" : ""}`}
            onClick={handleSubmit}
          >
            Finish
          </button>
        </>
      )}
    </>
  );
}

export default IsConditionComponent;
