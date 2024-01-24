import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { storeUserData } from "../utils/storage";

const innitialValues = {
  nom: "",
  prenom: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const RegisterScreen = ({ navigation }) => {
  const [formValues, setFormValues] = useState(innitialValues);
  const [error, setError] = useState("");
  const onChangeText = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async () => {
    if (
      formValues.nom != "" &&
      formValues.prenom != "" &&
      formValues.email != "" &&
      formValues.password != "" &&
      formValues.confirmPassword != "" &&
      formValues.password != formValues.confirmPassword
    ) {
      setError("Il y'a des erreurs dans le formulaire");
    } else {
      const savedData = {
        nom: formValues.name,
        prenom: formValues.prenom,
        email: formValues.email,
        password: formValues.password,
      };
      await storeUserData(savedData);
      navigation.navigate("Dashboard");
    }
  };
  return (
    <View>
      {error && <Text>{error}</Text>}
      <TextInput
        label="Nom"
        value={formValues.nom}
        onChangeText={(text) => onChangeText("nom", text)}
      />
      <TextInput
        label="Prenom"
        value={formValues.prenom}
        onChangeText={(text) => onChangeText("prenom", text)}
      />
      <TextInput
        label="Email"
        value={formValues.email}
        onChangeText={(text) => onChangeText("email", text)}
      />
      <TextInput
        label="Password"
        value={formValues.password}
        onChangeText={(text) => onChangeText("password", text)}
      />
      <TextInput
        label="Confirm Password"
        value={formValues.confirmPassword}
        onChangeText={(text) => onChangeText("confirmPassword", text)}
      />
      <Button icon="camera" mode="contained" onPress={onSubmit}>
        Submit form
      </Button>
      <Text>
        Vous avez déja un compte ?{" "}
        <Text onPress={() => navigation.navigate("Login")}>Connecter vous</Text>
      </Text>
    </View>
  );
};
