import { memo } from 'react';
import styled from 'styled-components';

const Skeleton = styled.span`
  @keyframes react-loading-skeleton {
    100% {
      transform: translateX(100%);
    }
  }

  --base-color: #ebebeb;
  --highlight-color: #f5f5f5;
  --animation-duration: 1.5s;
  --animation-direction: normal;
  --pseudo-element-display: block; /* Enable animation */

  background-color: var(--base-color);

  width: 100%;
  height: 20px;
  border-radius: 0.25rem;
  display: inline-flex;
  line-height: 1;

  position: relative;
  overflow: hidden;
  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */

  &::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: relative;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--base-color),
      var(--highlight-color),
      var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

export default memo(Skeleton);
