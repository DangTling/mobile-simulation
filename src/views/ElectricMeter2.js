import { useDispatch, useSelector } from "react-redux";
import Image from "../components/Image";
import Text from "../components/Text";
import View from "../components/View";

import IsConditionComponent from "../components/isConditionComponent";

import ScrollView from "../components/ScrollView";
import { useState } from "react";
import { setItemWantFix } from "../redux/itemWantFix";

import { setIndexWantFix } from "../redux/indexWantFix";

function ElectricMeter2() {
  const comp = useSelector((state) => state.comp);
  const itemWantFix = useSelector((state) => state.itemWantFix);
  const dispatch = useDispatch();
  const [displayed, setDisplayed] = useState(false);
  // const [itemWantFix, setItemWantFix] = useState({});
  const handleClick = (item, index) => {
    setDisplayed(true);

    dispatch(setItemWantFix(item));
    dispatch(setIndexWantFix(index));
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
      {comp &&
        comp.map((item, index) => {
          // console.log(item);
          if (item.type === "text") {
            return (
              <Text
                key={index}
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                value={item.value}
                fontSize={`${item.fontSize}px`}
                color={item.text_style.color}
                fontWeight={item.text_style.fontWeight}
                zIndex={index}
                backgroundColor={
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : ""
                }
                alignItems={
                  item.style && item.style.alignItems
                    ? item.style.alignItems
                    : ""
                }
                onClick={() => handleClick(item, index)}
              />
            );
          } else if (item.type === "image") {
            return (
              <Image
                key={index}
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                uri={
                  item.map_data.default && item.map_data.default.uri
                    ? item.map_data.default.uri
                    : item.map_data.true && item.map_data.true.uri
                    ? item.map_data.true.uri
                    : item.map_data[item.value] && item.map_data[item.value].uri
                    ? item.map_data[item.value].uri
                    : ""
                }
                mapData={item.map_data}
                zIndex={index}
                alignItems={
                  item.style && item.style.alignItems
                    ? item.style.alignItems
                    : ""
                }
                resizeMode={
                  item.image_style.resizeMode === "stretch" ? "" : "contain"
                }
                func={item.function ? item.function : {}}
                dataType={item.data_type ? item.data_type : ""}
                value={item.value ? item.value[0] : ""}
                onClick={() => handleClick(item, index)}
              />
            );
          } else if (item.isConditionComponent) {
            return (
              <IsConditionComponent
                zIndex={index}
                value={item.value}
                mapItem={item.map_item}
                ind={index}
              />
            );
          } else if (item.type === "scroll_view") {
            return <ScrollView areas={item.areas} />;
          } else if (item.type === "view") {
            return (
              <View
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                backgroundColor={
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : ""
                }
                borderRadius={`${
                  item.style && item.style.borderRadius
                    ? item.style.borderRadius
                    : ""
                }px`}
                zIndex={index}
                onClick={() => handleClick(item, index)}
              />
            );
          }
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

export default ElectricMeter2;
