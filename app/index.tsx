import AddButton from "@/components/AddButton";
import Card from "@/components/Card";
import Circle from "@/components/Circle";
import MyModal from "@/components/Modal";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Circle title="Helloaczx" />
        <Circle title="Kamu adlaah yangasdawdwww" />
      </View>*/}

      <View style={{ marginTop: 50, marginHorizontal: 10 }}>
        <Button title="Go to About" onPress={() => router.push("/login")} />
        <Card />
      </View>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default HomeScreen;
