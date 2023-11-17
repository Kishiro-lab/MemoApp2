import { Stack } from "expo-router";

export default function Layout(): JSX.Element {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4682A9",
        },
        headerTintColor: "#fff",
        headerTitle: "Memo App",
        headerTitleAlign: "center",
        headerBackVisible: true,
        headerBackTitleVisible: true,
        headerBackTitle: "Back",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
        animation: "fade_from_bottom",
      }}
    />
  );
}
