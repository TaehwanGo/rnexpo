import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../components/auth/AuthShared";

export default function Login({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">) {
  return (
    <AuthLayout>
      <AuthTextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
      />
      <AuthTextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
      />
    </AuthLayout>
  );
}
