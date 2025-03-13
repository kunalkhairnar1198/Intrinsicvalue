import * as React from "react";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

const Backgroundcircle = ({ cx, cy, r, rotation = "0deg", style, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    style={[style, { transform: [{ rotate: rotation }] }]} 
  >
    <Defs>
      <LinearGradient
        id="a"
        x1="250"
        x2="-100"
        y1="49.800"
        y2="49.800"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C8D6FF" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>

    <Circle cx={cx} cy={cy} r={r} fill="url(#a)" opacity={0.2} />
  </Svg>
);

export default Backgroundcircle;
