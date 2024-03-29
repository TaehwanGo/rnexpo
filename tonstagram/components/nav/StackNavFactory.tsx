import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/Search";
import Feed from "../../screens/Feed";
import { LoggedInParamList } from "../../navigators/LoggedOutNav";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";

const Stack = createStackNavigator<LoggedInParamList>();

export default function StackNavFactory({
  screenName,
}: {
  screenName: string;
}) {
  return (
    <Stack.Navigator>
      {screenName === "Feed" ? (
        <Stack.Screen name="Feed" component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name="Notifications" component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name="Me" component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
