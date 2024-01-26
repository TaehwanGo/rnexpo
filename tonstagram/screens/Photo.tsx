import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootTabParamList } from "../navigators/LoggedOutNav";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export default function Photo({
  navigation,
}: BottomTabScreenProps<RootTabParamList, "Photo">) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
