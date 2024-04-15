import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FoodListItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ gap: 5, flex: 1 }}>
        <Text style={{ color: "black", fontWeight: "700" }}>{item.label}</Text>
        <Text style={{ color: "gray", fontWeight: "400" }}>
          {item.cal} cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F6F6F8",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

type FoodItem = { label: string; cal: number; brand: string };

export default FoodListItem;
