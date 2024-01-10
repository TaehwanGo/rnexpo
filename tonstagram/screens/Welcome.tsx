import React from "react";
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";

export default function Welcome(
  props: NativeStackScreenProps<RootStackParamList, "Welcome">
) {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
