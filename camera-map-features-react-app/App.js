import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import AllPlaces from './screens/allplaces';
import AddPlace from './screens/addplace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>  
      <StatusBar style='dark' />  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='AllPlaces' component={AllPlaces} />
          <Stack.Screen name='AddPlace' component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


