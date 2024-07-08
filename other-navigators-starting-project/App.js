import { NavigationContainer  } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';




const BottomTab = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer>
    <BottomTab.Navigator initialRouteName="Welcome" screenOptions={{
        tabBarActiveTintColor: "#3c0a6b",
        headerTintColor: "white",
        headerStyle: {backgroundColor: "#3c0a6b"}
        // drawerStyle: {backgroundColor: "#ccc"}
    }}>
      <BottomTab.Screen name="Welcome" 
                     component={WelcomeScreen}
                      options={{
                      drawerLabel: "Welcome Screen",
                      tabBarIcon: ({color,size}) => <Ionicons name="home" color={color} size={size} ></Ionicons>
                      }}
      />
      <BottomTab.Screen name="User" component={UserScreen} 
                    options={{
                       tabBarIcon: ({color,size}) => <Ionicons name="person" color={color} size={size}></Ionicons>
                    }}
      />
    </BottomTab.Navigator>
  </NavigationContainer>;
}
