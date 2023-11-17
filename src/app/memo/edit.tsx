import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { router } from "expo-router";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (): void => {
  router.back();
};

export default function Edit(): JSX.Element {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={"買い物\nリスト"} multiline />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="check" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4EB",
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: "top",
  },
});
