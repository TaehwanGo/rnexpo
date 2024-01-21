import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { AuthTextInput } from "../components/auth/AuthShared";
import { TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";

type CreateAccountForm = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export default function CreateAccount({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CreateAccount">) {
  const { register, handleSubmit, setValue, getValues } =
    useForm<CreateAccountForm>();
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onCompleted = (data: CreateAccountForm) => {
    const { username, password } = getValues();
    navigation.navigate("Login", {
      username,
      password,
    });
  };

  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne?.current?.focus();
  };
  const onValid = (data: CreateAccountForm) => {
    console.log(data);
    onCompleted(data);
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);
  return (
    <AuthLayout>
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <AuthTextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text) => setValue("lastName", text)}
      />
      <AuthTextInput
        ref={usernameRef}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <AuthTextInput
        ref={emailRef}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <AuthTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
