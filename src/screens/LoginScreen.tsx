import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Routes } from "~/navigation/Routes";
import { Header } from "~/components/Header";

export function LoginScreen() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const navigation = useNavigation<any>();

  function toggleSecureIcon() {
    setIsVisible(!isVisible);
  }

  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  function navigateToShips() {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }

  return (
    <>
      <Header title="Espace hyper sécurisé" />
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
          onPress={() => navigateToShips()}
          style={[styles.button, styles.marginBottom]}
        >
          Entre donc !
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text variant={"labelSmall"} style={[styles.textMuted]}>
            Si tu te logues, tu acceptes absolument tout
          </Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: "black",
  },

  marginBottom: {
    marginBottom: 15,
  },
});
