import styled from "styled-components";

function View(props) {
  return <StyledDiv {...props}></StyledDiv>;
}

export default View;

const StyledDiv = styled.div`
  width: calc(${(props) => props.width} * var(--unit-width));
  height: calc(${(props) => props.height} * var(--unit-height));
  position: absolute;
  top: calc(${(props) => props.y || "0"} * var(--unit-height));
  left: calc(
    ${(props) => (props.x !== null ? props.x : 0)} * var(--unit-width)
  );
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  z-index: ${(props) => props.zIndex};
`;
