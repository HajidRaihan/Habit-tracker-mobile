import { StyleSheet, Text, View } from "react-native";
import { FullWindowOverlay } from "react-native-screens";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ini cardsdaw</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "auto",
    height: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
  },
  text: {
    color: "white",
  },
});

export default Card;
