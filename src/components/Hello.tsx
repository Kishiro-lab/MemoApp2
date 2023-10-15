import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children?: string;
  name?: string;
  bang?: boolean;
  style?: TextStyle;
}

export default function Hello(props: Props): JSX.Element {
  const { children, name, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello{children !== undefined ? ` ${children}` : ""}
        {name !== undefined ? ` ${name}` : ""}
        {bang === true ? "!!!" : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});
