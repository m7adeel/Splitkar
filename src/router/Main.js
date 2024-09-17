import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from './Home';

const Stack = createStackNavigator();

function MainRouter() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default MainRouter;