import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';



const Drawer = createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator initialRouteName="Welcome" screenOptions={{
        drawerActiveBackgroundColor: "#F0E1FF",
        drawerActiveTintColor: "#3c0a6b",
        // drawerStyle: {backgroundColor: "#ccc"}
    }}>
      <Drawer.Screen name="Welcome" 
                     component={WelcomeScreen}
                     options={{
                      headerStyle: {backgroundColor: "#3c0a6b"},
                      headerTintColor: "white",
                      drawerLabel: "Welcome Screen",
                      drawerIcon: ({color,size}) => <Ionicons name="home" color={color} size={size} ></Ionicons>
                     }}
     />
      <Drawer.Screen name="User" component={UserScreen} 
                    options={{
                       drawerIcon: ({color,size}) => <Ionicons name="person" color={color} size={size}></Ionicons>
                    }}/>
    </Drawer.Navigator>
  </NavigationContainer>;
}
