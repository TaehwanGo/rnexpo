import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  focused: boolean;
};
export default function TabIcon({ iconName, color, focused }: Props) {
  return (
    <Ionicons
      name={
        focused
          ? iconName
          : (`${iconName}-outline` as React.ComponentProps<
              typeof Ionicons
            >["name"])
      }
      color={color}
      size={22}
    />
  );
}
