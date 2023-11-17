import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const handlePress = (): void => {
  router.replace("/auth/log_in");
};

export default function LogOutButton(): JSX.Element {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "rgba(255,255,255, 0.7)",
    fontSize: 12,
    lineHeight: 24,
  },
});
