import { Redirect } from "expo-router";

export default function Index(): JSX.Element {
  return <Redirect href="auth/sign_up" />;
}
