import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/components/Hello";

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Hello bang></Hello>
      <Hello
        name="Kishiro"
        bang
        style={{ color: "black", backgroundColor: "red" }}
      >
        World
      </Hello>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
