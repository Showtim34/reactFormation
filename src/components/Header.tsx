import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text variant={"headlineLarge"} style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    width: "100%",
    paddingVertical: 80,
    color: "white",
    alignItems: "center",
  },
  headerText: {
    color: "white",
  },
});
