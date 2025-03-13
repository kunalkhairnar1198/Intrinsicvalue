import { StatusBar, StyleSheet, View } from "react-native";
import Backgroundcircle from "../../assets/SVG/BgSvgs/Backgroundcircle";
import { useRoute } from "@react-navigation/native";

const Background = () => {
  const route = useRoute();
  const isLoginScreen = 
    route.name === "Loginscreen" || route.name === "Emailverfiyscreen";

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Backgroundcircle
        style={styles.topLeft}
        cx={isLoginScreen ? 350 : 30}
        cy={30}
        r={200}
      />

      <Backgroundcircle
        style={isLoginScreen ? styles.bottomLeft : styles.bottomRight}
        cx={200}
        cy={200}
        r={200}
        rotation={isLoginScreen ? "25deg" : "0deg"} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    ...StyleSheet.absoluteFillObject,
  },
  topLeft: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  bottomRight: {
    position: "absolute",
    bottom: -600,
    left: 125,
  },
  bottomLeft: {
    position: "absolute",
    bottom: -600,
    left: -240,
  },
});

export default Background;
