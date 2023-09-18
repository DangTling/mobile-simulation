import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setValueOfTemp } from "../redux/valueOfTempSlice";
import { useEffect, useState } from "react";
import { setValueOfOn_Off } from "../redux/valueOfOn_OffSlice";

function Image(props) {
  let [param, setParam] = useState(null);
  // let [status, setStatus] = useState(true);
  // let param = useSelector((state) => state.image.param);
  let status = useSelector((state) => state.valueOfOn_Off);
  const valueOfTemp = useSelector((state) => state.valueOfTemp);
  const dispatch = useDispatch();
  const { func, dataType, mapData } = props;
  const nextStepValue = () => {
    var newValue = valueOfTemp + func.step;
    if (newValue >= 0) {
      dispatch(setValueOfTemp(valueOfTemp + func.step));
    }
  };
  const updateState = () => {
    if (dataType === "boolean") {
      setParam(status);
      // setStatus(!status);
      // dispatch(setParam(status));
      dispatch(setValueOfOn_Off(!status));
      dispatch(setValueOfTemp(0));
    } else {
      if (!mapData[0]) {
        if (param + 1 <= Object.keys(mapData).length - 1) {
          setParam(param + 1);
          // dispatch(setParam(param + 1));
        } else {
          setParam(1);
          // dispatch(setParam(1));
        }
      } else {
        if (param === null) {
          // setParam(0);
          dispatch(setParam(0));
        } else if (param + 1 < Object.keys(mapData).length - 1) {
          setParam(param + 1);
          // dispatch(setParam(param + 1));
        } else {
          setParam(0);
          // dispatch(setParam(0));
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

  return (
    <StyledImage {...props}>
      {props.uri !== "" ? (
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
`;
