import { useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import notifee from '@notifee/react-native';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const timeout = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timeout);
  }, []);


  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <View>
          <Text>Welcome to the dashboard</Text>
          <Button onPress={()=>onDisplayNotification()}>display notification</Button>
          <Button onPress={() => navigation.navigate("Login")}>Logout</Button>

        </View>
      )}
    </View>
  );
};
