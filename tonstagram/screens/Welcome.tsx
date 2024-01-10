import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";

export default function Welcome(
  props: NativeStackScreenProps<RootStackParamList, "Welcome">
) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CreateAccount")}
      >
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <View>
          <Text>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
