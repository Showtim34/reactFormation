import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { Header } from "../components/Header";

export function LoginScreen() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Header title="Login Screen" />
      <View style={styles.main}>
        <TextInput
          label="Email"
          value={text}
          onChangeText={() => setText(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={() => setPassword(password)}
          textContentType="password"
          secureTextEntry={isVisible}
          style={styles.input}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              icon={isVisible ? "eye-off" : "eye"}
            />
          }
        />
        <Button
          icon="lock"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={[styles.marginBottom]}
        >
          Entre donc !
        </Button>
        <Text variant={"labelSmall"} style={[styles.textMuted]}>
          Si tu te logues, tu acceptes absolument tout
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  textMuted: {
    color: "#ccc",
  },
  marginBottom: {
    marginBottom: 15,
  },
});
