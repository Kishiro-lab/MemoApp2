import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

export default function Button(props: Props): JSX.Element {
  const { label, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "#4682A9",
    marginTop: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 32,
  },
});
