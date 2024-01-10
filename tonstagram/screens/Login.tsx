import React from "react";
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";

export default function Login(
  props: NativeStackScreenProps<RootStackParamList, "Login">
) {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
