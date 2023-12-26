import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import Button from "../../components/Button";
import { auth } from "../../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handlePress = (email: string, password: string): void => {
  // 会員登録
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid);
      router.replace("/memo/list");
    })
    .catch((error) => {
      const { code, message } = error;
      console.log(code, message);
      Alert.alert(message);
    });
};

const handlePressLogin = (): void => {
  router.replace("/auth/log_in");
};

export default function SignUp(): JSX.Element {
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
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={[styles.input, styles.email]}
          value={email}
          onChangeText={handleChangeEmail}
          autoCapitalize="none"
          autoFocus
          placeholder="Email Address"
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
        <Button
          label="Submit"
          onPress={() => {
            handlePress(email, password);
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity onPress={handlePressLogin}>
            <Text style={[styles.footerText, styles.link]}>Log In.</Text>
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
  },
  email: {
    marginTop: 24,
  },
  password: {
    marginTop: 16,
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
