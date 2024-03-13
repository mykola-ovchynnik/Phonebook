import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const hamsterAnim = keyframes`
  from, to {
    transform: rotate(4deg) translate(-0.8em, 1.85em);
  }

  50% {
    transform: rotate(0) translate(-0.8em, 1.85em);
  }
`;

const hamsterHeadAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(8deg);
  }
`;

const hamsterEyeAnim = keyframes`
  from, 90%, to {
    transform: scaleY(1);
  }

  95% {
    transform: scaleY(0);
  }
`;

const hamsterEarAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(12deg);
  }
`;

const hamsterBodyAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-2deg);
  }
`;

const hamsterFRLimbAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(50deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-30deg) translateZ(-1px);
  }
`;

const hamsterFLLimbAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(-30deg);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(50deg);
  }
`;

const hamsterBRLimbAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(-60deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(20deg) translateZ(-1px);
  }
`;

const hamsterBLLimbAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(20deg);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-60deg);
  }
`;

const hamsterTailAnim = keyframes`
  from, 25%, 50%, 75%, to {
    transform: rotate(30deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(10deg) translateZ(-1px);
  }
`;

const spokeAnim = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-1turn);
  }
`;

// Styled components
const WheelAndHamsterContainer = styled.div`
  --dur: 1s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12em;
  height: 12em;
  font-size: 14px;
`;

const Wheel = styled.div`
  border-radius: 50%;
  background: radial-gradient(
    100% 100% at center,
    hsla(0, 0%, 60%, 0) 47.8%,
    hsl(0, 0%, 60%) 48%
  );
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Hamster = styled.div`
  animation: ${hamsterAnim} var(--dur) ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: calc(50% - 3.5em);
  width: 7em;
  height: 3.75em;
  transform: rotate(4deg) translate(-0.8em, 1.85em);
  transform-origin: 50% 0;
  z-index: 1;
`;

const HamsterBody = styled.div`
  animation: ${hamsterBodyAnim} var(--dur) ease-in-out infinite;
  position: relative;
  background: hsl(30, 90%, 90%);
  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
  box-shadow: 0.1em 0.75em 0 hsl(30, 90%, 55%) inset,
    0.15em -0.5em 0 hsl(30, 90%, 80%) inset;
  top: 0.25em;
  left: 2em;
  width: 4.5em;
  height: 3em;
  transform-origin: 17% 50%;
  transform-style: preserve-3d;
`;

const HamsterHead = styled.div`
  animation: ${hamsterHeadAnim} var(--dur) ease-in-out infinite;
  position: absolute;
  background: hsl(30, 90%, 55%);
  border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
  box-shadow: 0 -0.25em 0 hsl(30, 90%, 80%) inset,
    0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
  top: 0;
  left: -2em;
  width: 2.75em;
  height: 2.5em;
  transform-origin: 100% 50%;
`;

const HamsterEar = styled.div`
  animation: ${hamsterEarAnim} var(--dur) ease-in-out infinite;
  position: absolute;
  background: hsl(0, 90%, 85%);
  border-radius: 50%;
  box-shadow: -0.25em 0 hsl(30, 90%, 55%) inset;
  top: -0.25em;
  right: -0.25em;
  width: 0.75em;
  height: 0.75em;
  transform-origin: 50% 75%;
`;

const HamsterEye = styled.div`
  animation: ${hamsterEyeAnim} var(--dur) linear infinite;
  position: absolute;
  background-color: hsl(0, 0%, 0%);
  border-radius: 50%;
  top: 0.375em;
  left: 1.25em;
  width: 0.5em;
  height: 0.5em;
`;

const HamsterNose = styled.div`
  background: hsl(0, 90%, 75%);
  border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
  position: absolute;
  top: 0.75em;
  left: 0;
  width: 0.2em;
  height: 0.25em;
`;

const HamsterLimb = styled.div`
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0% 100%, 40% 80%);
  top: 2em;
  left: 0.5em;
  width: 1em;
  height: 1.5em;
  transform-origin: 50% 0;
`;

const HamsterLimbFR = styled(HamsterLimb)`
  animation: ${hamsterFRLimbAnim} var(--dur) linear infinite;
  background: linear-gradient(hsl(30, 90%, 80%) 80%, hsl(0, 90%, 75%) 80%);
  transform: rotate(15deg) translateZ(-1px);
`;

const HamsterLimbFL = styled(HamsterLimb)`
  animation: ${hamsterFLLimbAnim} var(--dur) linear infinite;
  background: linear-gradient(hsl(30, 90%, 90%) 80%, hsl(0, 90%, 85%) 80%);
  transform: rotate(15deg);
`;

const HamsterTail = styled.div`
  animation: ${hamsterTailAnim} var(--dur) linear infinite;
  position: absolute;
  background: hsl(0, 90%, 85%);
  border-radius: 0.25em 50% 50% 0.25em;
  box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
  top: 1.5em;
  right: -0.5em;
  width: 1em;
  height: 0.5em;
  transform: rotate(30deg) translateZ(-1px);
  transform-origin: 0.25em 0.25em;
`;

const HamsterLimbBR = styled(HamsterLimb)`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    70% 90%,
    70% 100%,
    30% 100%,
    40% 90%,
    0% 30%
  );
  top: 1em;
  left: 2.8em;
  width: 1.5em;
  height: 2.5em;
  transform-origin: 50% 30%;
  animation: ${hamsterBRLimbAnim} var(--dur) linear infinite;
  background: linear-gradient(hsl(30, 90%, 80%) 90%, hsl(0, 90%, 75%) 90%);
  transform: rotate(-25deg) translateZ(-1px);
`;

const HamsterLimbBL = styled(HamsterLimb)`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    70% 90%,
    70% 100%,
    30% 100%,
    40% 90%,
    0% 30%
  );
  top: 1em;
  left: 2.8em;
  width: 1.5em;
  height: 2.5em;
  transform-origin: 50% 30%;
  animation: ${hamsterBLLimbAnim} var(--dur) linear infinite;
  background: linear-gradient(hsl(30, 90%, 90%) 90%, hsl(0, 90%, 85%) 90%);
  transform: rotate(-25deg);
`;

const Spoke = styled.div`
  animation: ${spokeAnim} var(--dur) linear infinite;
  background: radial-gradient(
      100% 100% at center,
      hsl(0, 0%, 60%) 4.8%,
      hsla(0, 0%, 60%, 0) 5%
    ),
    linear-gradient(
        hsla(0, 0%, 55%, 0) 46.9%,
        hsl(0, 0%, 65%) 47% 52.9%,
        hsla(0, 0%, 65%, 0) 53%
      )
      50% 50% / 99% 99% no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Loader = () => {
  return (
    <WheelAndHamsterContainer
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
    >
      <Wheel />
      <Hamster>
        <HamsterBody>
          <HamsterHead>
            <HamsterEar />
            <HamsterEye />
            <HamsterNose />
          </HamsterHead>
          <HamsterLimbFR />
          <HamsterLimbFL />
          <HamsterLimbBR />
          <HamsterLimbBL />
          <HamsterTail />
        </HamsterBody>
      </Hamster>
      <Spoke />
    </WheelAndHamsterContainer>
  );
};

export default Loader;
