import { useSelector } from "react-redux";
import Image from "./Image";
import Text from "./Text";
import { useEffect, useState } from "react";

function IsConditionComponent(props) {
  let status = useSelector((state) => state.valueOfOn_Off);

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
    </>
  );
}

export default IsConditionComponent;
