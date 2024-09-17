import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingPage from '../screens/LandingPage';
import AddBill from '../screens/AddBill';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="LandingPage" component={LandingPage} />
      <Tab.Screen name="AddBill" component={AddBill} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Home;