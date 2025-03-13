import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

const Backgroundcircle = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={props.cx} cy={props.cy} r={props.r} fill="url(#a)"  opacity={0.2} />
    <Defs>
      <LinearGradient
        id="a"
        x1={250}
        x2={-150}
        y1={49.805}
        y2={49.805}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C8D6FF" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Backgroundcircle
