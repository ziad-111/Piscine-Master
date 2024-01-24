import { AsyncStorage } from "react-native";

export const storeUserData = async (data) => {
  try {
    for (let info in data) {
      await AsyncStorage.setItem(info, data[info]);
    }
  } catch (error) {
    console.log("error saving user data");
  }
};

export const retrieveUserData = async () => {
  try {
    const userdata = {
      nom: await AsyncStorage.getItem("nom"),
      prenom: await AsyncStorage.getItem("prenom"),
      email: await AsyncStorage.getItem("email"),
      password: await AsyncStorage.getItem("password"),
    };
    return userdata;
  } catch (error) {
    console.log("error getting user data");
  }
};

export const clearStorage = async () => {
  const keys = ["nom", "prenom", "email", "password"];
  AsyncStorage.multiRemove(keys, (err) => {
    // keys k1 & k2 removed, if they existed
    // do most stuff after removal (if you want)
  });
};
