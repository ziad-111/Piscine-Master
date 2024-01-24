import { Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async () => {
    if (formValues.email != "" && formValues.password != "") {
      setError("Il y'a des erreurs dans le formulaire");
    } else {
      const userData = await getUserData();
      if (
        userData.email == formValues.email &&
        userData.password == formValues.password
      ) {
        navigation.navigate("Dashboard");
      } else {
        setError("Email ou mot de passe incorrect");
      }
    }
  };
  return (
    <View>
      {error && <Text>{error}</Text>}

      <TextInput
        label="Email"
        value={formValues.email}
        onChangeText={(text) => setFormValues({ ...formValues, email: text })}
      />
      <TextInput
        label="Password"
        value={formValues.password}
        onChangeText={(text) =>
          setFormValues({ ...formValues, password: text })
        }
      />

      <Button icon="camera" mode="contained" onPress={onSubmit}>
        Submit form
      </Button>
      <Text>
        Vous n'avez pas encore de compte ?{" "}
        <Text onPress={() => navication.push("Register")}>créer en un</Text>
      </Text>
    </View>
  );
};
