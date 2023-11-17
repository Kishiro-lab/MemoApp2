import { View, Text, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (): void => {
  router.push("/memo/edit");
};

export default function Detail(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月29日 15:30</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 56, bottom: "auto" }}>
        <Icon name="pencil" />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4EB",
  },
  memoHeader: {
    height: 96,
    backgroundColor: "#4682A9",
    justifyContent: "center",
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});
