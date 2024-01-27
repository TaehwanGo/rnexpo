import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootTabParamList } from "../navigators/LoggedOutNav";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export default function Search({
  navigation,
}: BottomTabScreenProps<RootTabParamList, "Search">) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
