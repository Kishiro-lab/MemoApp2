import { View, Text, StyleSheet } from "react-native";

export default function Index(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      {/* memo list */}
      <View>
        {/* memo Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月16日 13:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* memo Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月16日 13:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* memo Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月16日 13:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* button */}
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
