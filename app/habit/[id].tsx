import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const HabitDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Detail</Text>
      <Text style={{ color: "white" }}>{id}</Text>
    </View>
  );
};

export default HabitDetail;
