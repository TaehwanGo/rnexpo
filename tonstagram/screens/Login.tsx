import React from "react";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

export default function Login({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">) {
  return (
    <AuthLayout>
      <Text>Login</Text>
      <AuthButton
        disabled
        onPress={() => navigation.navigate("CreateAccount")}
        text="Go to Create Account"
      />
    </AuthLayout>
  );
}
