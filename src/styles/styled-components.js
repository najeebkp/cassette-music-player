import styled from "styled-components";
import { Play } from "@styled-icons/ionicons-outline/Play";
import { Pause } from "@styled-icons/fluentui-system-regular/Pause";
import { Replay } from "@styled-icons/material/Replay";
import { SkipStart } from "@styled-icons/bootstrap/SkipStart";
import { SkipEnd } from "@styled-icons/bootstrap/SkipEnd";
import { Shuffle } from "@styled-icons/ionicons-solid/Shuffle";

let boxShadow = `rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
rgba(0, 0, 0, 0.07) 0px 16px 16px`;

export const Overlay = styled.div`
  background: linear-gradient(to right, transparent, #e4225e);
  height: 15px;
  margin-bottom: -18px;
  position: relative;
  z-index: 999;
  width: ${(props) => props.value}%;
`;

export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "range",
}))`
  position: block;
  z-index: 0;
  outline: none;
  transition: opacity 0.2s;
  width: 100%;
  appearance: none;
  background: transparent;
  // background: linear-gradient(
  //   to right,
  //   #e4225e ${(props) => props.value}%,
  //   transparent ${(props) => props.value}%
  // );

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background-color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    z-index: 9999;
    position: relative;
  }
`;

export const PlayButton = styled(Play)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;
export const PauseButton = styled(Pause)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;
export const ReplayButton = styled(Replay)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;

export const PrevButton = styled(SkipStart)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;
export const NextButton = styled(SkipEnd)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;
export const ShuffleButton = styled(Shuffle)`
  color: #5bd4dc;
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    box-shadow: ${boxShadow};
  }
`;
