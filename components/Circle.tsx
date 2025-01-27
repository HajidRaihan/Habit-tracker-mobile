import { View, Text, StyleSheet } from "react-native";

interface CircleProps {
  title: string;
}

const Circle: React.FC<CircleProps> = ({ title }) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "red",
        marginTop: 10,
        borderRadius: 100 / 2,
        marginLeft: 50,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Circle;
