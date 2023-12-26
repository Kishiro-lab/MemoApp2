import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";

import Button from "../../components/Button";

const handlePress = (): void => {
  // ログイン処理
  router.replace("/memo/list");
};

const handlePressSignUp = (): void => {
  router.replace("/auth/sign_up");
};

export default function LogIn(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (text: string): void => {
    setEmail(text);
  };
  const handleChangePassword = (text: string): void => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={[styles.input, styles.email]}
          value={email}
          onChangeText={handleChangeEmail}
          autoCapitalize="none"
          autoFocus
          placeholder="Email Address!!!!"
          placeholderTextColor={"#DDD"}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={[styles.input, styles.password]}
          value={password}
          onChangeText={handleChangePassword}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor={"#DDD"}
          secureTextEntry
          textContentType="password"
        />
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity onPress={handlePressSignUp}>
            <Text style={[styles.footerText, styles.link]}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C8E4",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  input: {
    backgroundColor: "#F6F4EB",
    height: 48,
    fontSize: 16,
    lineHeight: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    verticalAlign: "middle",
  },
  email: {
    marginTop: 24,
  },
  password: {
    marginTop: 16,
  },
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
  footer: {
    marginTop: 24,
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  link: {
    color: "#4682A9",
    // color: "#467FD3",
  },
});
