import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Icon from "./Icon";

export default function MemoListItem(): JSX.Element {
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年10月16日 13:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    height: 80,
    borderBottomColor: "rgba(0,0,0,0.15)",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    backgroundColor: "#F6F4EB",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
