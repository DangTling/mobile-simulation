import { useState, useEffect } from "react";
import Image from "./Image";
import Text from "./Text";
import View from "./View";

function ScrollView(props) {
  const elementsToRender = [];
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const container = document.querySelector(".screen-display");
  const [maxScroll, setMaxScroll] = useState(
    container.scrollHeight * (props.areas.length - 1)
  );
  const content = document.querySelector(".content");

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartY(e.clientY);
      setCurrentY(content.getBoundingClientRect().top);
      content.style.transition = "none";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const newPosition = currentY + deltaY;

      if (newPosition > 0) {
        setScrollY(0);
      } else if (-newPosition > maxScroll) {
        setScrollY(maxScroll);
      } else {
        setScrollY(newPosition);
        content.style.transform = `translateY(${newPosition}px)`;
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      content.style.transition = "transform 0.3s ease";
    };

    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, currentY]);
  props.areas.forEach((area, index) => {
    if (area.area) {
      area.area.forEach((item) => {
        if (item.type === "text") {
          elementsToRender.push(
            <Text
              key={index}
              x={item.x}
              y={item.y + 150 * index}
              width={item.width}
              height={item.height}
              value={item.value || item.value[0]}
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
                item.style && item.style.alignItems ? item.style.alignItems : ""
              }
            />
          );
        } else if (item.type === "image") {
          elementsToRender.push(
            <Image
              key={index}
              x={item.x}
              y={item.y + 150 * index}
              width={item.width}
              height={item.height}
              zIndex={props.zIndex}
              resizeMode={
                item.image_style.resizeMode === "stretch" ? "" : "contain"
              }
              alignItems={
                item.style && item.style.alignItems ? item.style.alignItems : ""
              }
              uri={
                item.map_data[item.value].uri
                  ? item.map_data[item.value].uri
                  : ""
              }
            />
          );
        } else if (item.type === "view") {
          console.log(item);

          elementsToRender.push(
            <View
              key={index}
              x={item.x}
              y={item.y + 150 * index}
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
      });
    }
    return elementsToRender;
  });

  return <div className="content">{elementsToRender}</div>;
}
export default ScrollView;
