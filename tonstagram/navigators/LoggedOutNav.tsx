import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
