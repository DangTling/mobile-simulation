import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setValueOfTemp } from "../redux/valueOfTempSlice";
import { useRef, useState } from "react";
import { setValueOfOn_Off } from "../redux/valueOfOn_OffSlice";
import { setValueOfParamMode } from "../redux/valueOfParamMode";
import { setValueOfParamSwing } from "../redux/valueOfParamSwing";
import { setValueOfParamFan_speed } from "../redux/valueOfParamFan_speed";

function Image(props) {
  let [param, setParam] = useState(null);

  const [showDelayed, setShowDelayed] = useState(false);

  const hoverTimeout = useRef(null);
  let paramFan_speed = useSelector((state) => state.valueOfParamFan_speed);
  let paramSwing = useSelector((state) => state.valueOfParamSwing);
  let paramMode = useSelector((state) => state.valueOfParamMode);
  let status = useSelector((state) => state.valueOfOn_Off);
  const valueOfTemp = useSelector((state) => state.valueOfTemp);
  const dispatch = useDispatch();
  const { func, dataType, mapData, value } = props;
  const nextStepValue = () => {
    var newValue = valueOfTemp + func.step;
    if (newValue >= 0) {
      dispatch(setValueOfTemp(valueOfTemp + func.step));
    }
  };
  const updateState = () => {
    if (dataType === "boolean") {
      setParam(status);
      dispatch(setValueOfOn_Off(!status));
      dispatch(setValueOfTemp(0));
    } else if (value === "mode") {
      if (!mapData[0]) {
        if (paramMode + 1 <= Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamMode(paramMode + 1));
        } else {
          dispatch(setValueOfParamMode(1));
        }
      } else {
        if (paramMode === null) {
          dispatch(setValueOfParamMode(0));
        } else if (paramMode + 1 < Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamMode(paramMode + 1));
        } else {
          dispatch(setValueOfParamMode(0));
        }
      }
      console.log(mapData[paramMode]);
    } else if (value === "fan_speed") {
      if (!mapData[0]) {
        if (paramFan_speed + 1 <= Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamFan_speed(paramFan_speed + 1));
        } else {
          dispatch(setValueOfParamFan_speed(1));
        }
      } else {
        if (paramFan_speed === null) {
          dispatch(setValueOfParamFan_speed(0));
        } else if (paramFan_speed + 1 < Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamFan_speed(paramFan_speed + 1));
        } else {
          dispatch(setValueOfParamFan_speed(0));
        }
      }
      console.log(mapData[paramFan_speed]);
    } else if (value === "swing") {
      if (!mapData[0]) {
        if (paramSwing + 1 <= Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamSwing(paramSwing + 1));
        } else {
          dispatch(setValueOfParamSwing(1));
        }
      } else {
        if (paramSwing === null) {
          dispatch(setValueOfParamSwing(0));
        } else if (paramSwing + 1 < Object.keys(mapData).length - 1) {
          dispatch(setValueOfParamSwing(paramSwing + 1));
        } else {
          dispatch(setValueOfParamSwing(0));
        }
      }
      console.log(mapData[paramSwing]);
    } else {
      if (
        !mapData[0] &&
        value !== "mode" &&
        value !== "fan_speed" &&
        value !== "swing"
      ) {
        if (param + 1 <= Object.keys(mapData).length - 1) {
          setParam(param + 1);
        } else {
          setParam(1);
        }
      } else {
        if (param === null) {
          setParam(0);
        } else if (param + 1 < Object.keys(mapData).length - 1) {
          setParam(param + 1);
        } else {
          setParam(0);
        }
      }
      console.log(mapData[param]);
    }
  };

  const handleClick = () => {
    if (func.name === "nextStepValue") {
      nextStepValue();
    } else if (func.name === "updateState") {
      updateState();
    }
  };

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
    <StyledImage
      className={`parent-image ${showDelayed ? "hovered" : ""}`}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.uri !== "" && props.value === "mode" ? (
        <img
          src={
            paramMode === null
              ? props.uri
              : props.mapData
              ? props.mapData[paramMode].uri
              : props.uri
          }
          alt={props.value}
          onClick={handleClick}
        />
      ) : (
        <span style={{ display: "none" }}></span>
      )}
      {props.uri !== "" && props.value === "swing" ? (
        <img
          src={
            paramSwing === null
              ? props.uri
              : props.mapData
              ? props.mapData[paramSwing].uri
              : props.uri
          }
          alt={props.value}
          onClick={handleClick}
        />
      ) : (
        <span style={{ display: "none" }}></span>
      )}
      {props.uri !== "" && props.value === "fan_speed" ? (
        <img
          src={
            paramFan_speed === null
              ? props.uri
              : props.mapData && props.mapData[paramFan_speed]
              ? props.mapData[paramFan_speed].uri
              : props.uri
          }
          alt={props.value}
          onClick={handleClick}
        />
      ) : (
        <span style={{ display: "none" }}></span>
      )}
      {props.uri !== "" &&
      props.value !== "mode" &&
      props.value !== "swing" &&
      props.value !== "fan_speed" ? (
        <img
          src={
            param === null
              ? props.uri
              : props.mapData
              ? props.mapData[param].uri
              : props.uri
          }
          alt={props.value}
          onClick={handleClick}
        />
      ) : (
        <span style={{ display: "none" }}></span>
      )}
      {showDelayed && (
        <div className="show">
          <p>Tọa độ x: {props.x} </p>
          <p>Tọa độ y: {props.y} </p>
          <p>Chiều cao: {props.height} </p>
          <p>Chiều rộng: {props.width} </p>
        </div>
      )}
    </StyledImage>
  );
}

export default Image;

const StyledImage = styled.div`
  width: calc(${(props) => props.width} * var(--unit-width));
  height: calc(${(props) => props.height} * var(--unit-height));
  position: absolute;
  top: calc(${(props) => props.y || "0"} * var(--unit-height));
  left: calc(${(props) => props.x || "0"} * var(--unit-width));
  display: flex;
  justify-content: ${(props) => props.alignItems || "center"};
  align-items: center;
  transform: translate(
    -calc(${(props) => props.y} * var(--unit-height)),
    -calc(${(props) => props.x} * var(--unit-width))
  );
  z-index: ${(props) => props.zIndex};
  img {
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.resizeMode};
  }
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
