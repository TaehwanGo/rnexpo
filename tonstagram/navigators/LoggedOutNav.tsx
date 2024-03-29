import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

export type RootStackParamList = {
  Welcome: undefined;
  Login?: {
    username?: string;
    password?: string;
  };
  CreateAccount: undefined;
};

export type LoggedInParamList = {
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Me: undefined;
  Profile: undefined;
  Photo: undefined;
};

export type RootTabParamList = {
  Feed: undefined;
  Search: undefined;
  Photo: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
