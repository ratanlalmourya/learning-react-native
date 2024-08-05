import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() { 

  useEffect(() => { 
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log("NOTIFICATION RECEIVED");
      console.log(notification);
      console.log(notification.request.content.data.userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("NOTIFICATION RESPONSE RECEIVED ");
      console.log(response);
    });
    
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    })();

    return () => {
      subscription1.remove();
      subscription2.remove();
    }
  }, []);

  async function scheduleNotification() {
    console.log("Push Notification Called");
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'My First Location Notification',
        body: 'This is the body of the notification. Ratan Mourya',
        data: { userName: 'Ratan' },
      },
      trigger: { seconds: 2 },
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
