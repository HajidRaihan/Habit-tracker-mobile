import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { FullWindowOverlay } from "react-native-screens";

interface CardProps {
  title: string;
  goal: string;
}

const Card: React.FC<CardProps> = ({ title, goal }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.text}>{goal}</Text>
        {/* <Text style={styles.text}>Times</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "auto",
    height: 80,
    // borderWidth: 1,
    padding: 20,
    // borderColor: "white",
    elevation: 3,
    backgroundColor: "#192734",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default Card;
