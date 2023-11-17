import { View, Text, StyleSheet } from "react-native";

export default function Header(): JSX.Element {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4682A9",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
    paddingBottom: 8,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
  },
  headerRight: {
    color: "rgba(255,255,255, 0.7)",
    position: "absolute",
    right: 16,
    bottom: 16,
    fontSize: 12,
    lineHeight: 24,
  },
});
