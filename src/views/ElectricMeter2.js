import { useDispatch, useSelector } from "react-redux";
import Image from "../components/Image";
import Text from "../components/Text";
import View from "../components/View";

import { useEffect, useState } from "react";
import IsConditionComponent from "../components/isConditionComponent";
import { setValueOfOn_Off } from "../redux/valueOfOn_OffSlice";

function ElectricMeter2() {
  const comp = useSelector((state) => state.comp);

  let status = useSelector((state) => state.valueOfOn_Off);

  return (
    <>
      {comp &&
        comp.map((item, index) => {
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
              />
            );
          } else if (item.isConditionComponent) {
            return (
              <IsConditionComponent
                zIndex={index}
                value={item.value}
                mapItem={item.map_item}
                key={index}
              />
            );
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
              />
            );
          }
        })}
    </>
  );
}

export default ElectricMeter2;
