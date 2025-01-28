import AddButton from "@/components/AddButton";
import Card from "@/components/Card";
import Circle from "@/components/Circle";
import MyModal from "@/components/Modal";
import { useFetchAllHabit } from "@/features/habit/useFetchAllHabit";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Button } from "react-native";
import { ActivityIndicator, Badge, useTheme } from "react-native-paper";

const HomeScreen = () => {
  const router = useRouter();

  const { data, isLoading } = useFetchAllHabit();
  console.log(data);

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="dark" />
        {/* <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Circle title="Helloaczx" />
        <Circle title="Kamu adlaah yangasdawdwww" />
      </View>*/}

        <View style={{ marginTop: 50, marginBottom: 50, marginHorizontal: 10, gap: 10 }}>
          {/* <Badge>3</Badge>
          <ActivityIndicator animating={true} size={"large"} color={"white"} /> */}
          {data?.data.map((item: any) => (
            <Card key={item.ID} title={item.name} goal={item.goal} />
          ))}
        </View>
        {/* <Button title="Go to About" onPress={() => router.push("/login")} /> */}
      </ScrollView>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202b",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default HomeScreen;
