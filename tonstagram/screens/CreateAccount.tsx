import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { AuthTextInput } from "../components/auth/AuthShared";
import { TextInput } from "react-native";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne?.current?.focus();
  };

  const onValid = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);
  return (
    <AuthLayout>
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <AuthTextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text) => setValue("lastName", text)}
      />
      <AuthTextInput
        ref={usernameRef}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
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
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <AuthTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "100%" }}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        disabled
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
