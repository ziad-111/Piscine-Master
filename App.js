import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Exercice1 } from "./screens/Exercice1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screen/auth.login";
import { RegisterScreen } from "./screen/auth.register";
import { HomeScreen } from "./screen/home.screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={HomeScreen} />
         
        </Stack.Group>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
