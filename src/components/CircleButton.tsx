import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type ViewStyle,
} from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function CircleButton(props: Props): JSX.Element {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.circleButton, style]}
    >
      <Text style={styles.circleButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#4682A9",
    width: 64,
    height: 64,
    borderRadius: 32,
    position: "absolute",
    right: 40,
    bottom: 40,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
  circleButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    lineHeight: 40,
  },
});
