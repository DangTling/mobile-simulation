import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Text(props) {
  const valueOfTemp = useSelector((state) => state.valueOfTemp);
  const { value } = props;
  const [showDelayed, setShowDelayed] = useState(false);
  const hoverTimeout = useRef(null);
  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowDelayed(true);
    }, [1000]);
  };
  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setShowDelayed(false);
  };
  return (
    <StyledText
      className={`parent-image ${showDelayed ? "hovered" : ""}`}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {typeof value === "object" ? valueOfTemp : value}
      {showDelayed && (
        <div className="show">
          <p>Tọa độ x: {props.x} </p>
          <p>Tọa độ y: {props.y} </p>
          <p>Chiều cao: {props.height} </p>
          <p>Chiều rộng: {props.width} </p>
        </div>
      )}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || 600};
  width: calc(${(props) => props.width} * var(--unit-width));
  height: calc(${(props) => props.height} * var(--unit-height));
  position: absolute;
  top: calc(${(props) => props.y || "0"} * var(--unit-height));
  left: calc(
    ${(props) => (props.x !== null ? props.x : 0)} * var(--unit-width)
  );
  display: flex;
  justify-content: ${(props) => props.alignItems || "center"};
  background-color: ${(props) => props.backgroundColor || ""};
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
  align-items: center;
  z-index: ${(props) => props.zIndex};

  .show {
    position: absolute;
    top: ${(props) => (props.y <= 75 ? "70%" : "-250%")};
    left: ${(props) => (props.x <= 25 ? "50%" : "-150%")};
    background-color: white;
    color: #000000;
    border: 2px solid rgb(10, 162, 212);
    padding: 8px;
    border-radius: 24px;
    min-width: 150px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    font-weight: 600;
  }
`;
