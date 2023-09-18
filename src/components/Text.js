import { useSelector } from "react-redux";
import styled from "styled-components";

function Text(props) {
  const valueOfTemp = useSelector((state) => state.valueOfTemp);
  const { value } = props;
  return (
    <StyledText {...props}>
      {typeof value === "object" ? valueOfTemp : value}
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
`;
