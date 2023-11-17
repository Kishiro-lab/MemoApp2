import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = (): void => {
  router.back();
};

export default function Create(): JSX.Element {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="" multiline />
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
