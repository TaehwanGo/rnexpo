import React, { useEffect, useRef } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../components/auth/AuthShared";
import { isLoggedInVar, logUserIn } from "../apollo";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";

type LoginFormData = {
  username: string;
  password: string;
};
export default function Login({
  route,
}: NativeStackScreenProps<RootStackParamList, "Login">) {
  console.log("route", route);
  const { register, handleSubmit, setValue, watch } = useForm<LoginFormData>({
    defaultValues: {
      username: route?.params?.username,
      password: route?.params?.password,
    },
  });
  const passwordRef = useRef<TextInput>(null);
  const onCompleted = async () => {
    isLoggedInVar(true);
    await logUserIn("token");
  };
  // const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
  //   onCompleted,
  // });
  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne?.current?.focus();
  };
  const onValid = (data: LoginFormData) => {
    onCompleted();
  };
  useEffect(() => {
    register("username", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);
  return (
    <AuthLayout>
      <AuthTextInput
        placeholder="Username"
        value={watch("username")}
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <AuthTextInput
        ref={passwordRef}
        placeholder="Password"
        value={watch("password")}
        secureTextEntry
        returnKeyType="done"
        lastOne
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Log In"
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
