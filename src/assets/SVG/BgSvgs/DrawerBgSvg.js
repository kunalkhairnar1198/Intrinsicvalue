import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const DrawerBgSvg = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={300} height={300} fill="none">
    <Path
      fill="url(#a)"
      d="M200 0A199.999 199.999 0 0 1 0 200V0h200Z"
      opacity={0.2}
    />
    <Path
      fill="url(#b)"
      d="M250 0A249.994 249.994 0 0 1 95.67 230.97 249.994 249.994 0 0 1 0 250V0h250Z"
      opacity={0.2}
    />
    <Path
      fill="url(#c)"
      d="M300 18.5c0 79.009-32 137.764-87.868 193.632A300.004 300.004 0 0 1 0 300V0h281.25S288.5 0 294 5.5s6 13 6 13Z"
      opacity={0.2}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={200}
        x2={-200}
        y1={-0.195}
        y2={-0.195}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C8D6FF" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={250}
        x2={-250}
        y1={-0.244}
        y2={-0.244}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C8D6FF" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={300}
        x2={-300}
        y1={-0.293}
        y2={-0.293}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C8D6FF" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default DrawerBgSvg
