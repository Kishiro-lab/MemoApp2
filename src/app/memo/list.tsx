import { View, StyleSheet } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

import LogOutButton from "../../components/LogOutButton";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (): void => {
  router.push("/memo/create");
};

export default function List(): JSX.Element {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* memo list */}
      <View style={styles.memoList}>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoList: {},
});
