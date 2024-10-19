import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import React, { useRef, useEffect, useCallback } from 'react';

import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

import LandingPage from '../screens/LandingPage';
import Profile from '../screens/Profile';
import Friends from '../screens/Friends';
import Wallet from '../screens/Wallet';
import Notifications from '../screens/Notifications';

// Icons
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const _renderIcon = (routeName, selectedTab) => {
  let icon = '';

  switch (routeName) {
    case 'LandingPage':
      icon = 'home';
      break;
    case 'Friends':
      icon = 'groups';
      break;
    case 'Notification':
      icon = 'notifications';
      break;
    case 'Wallet':
      icon = 'wallet';
      break;
  }

  if(routeName === 'Friends') {
    return (
      <MaterialIcons
        name={icon}
        size={28}
        color={routeName === selectedTab ? '#ffdc64' : '#3c3f44'}
      />
    )
  }

  return (
    <Ionicons
      name={icon}
      size={25}
      color={routeName === selectedTab ? '#ffdc64' : '#3c3f44'}
    />
  );
};

const renderTabBar = ({ routeName, selectedTab, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabbarItem}
    >
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const AddButton = ({ children, onPress, accessibilityState }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#ffdc64] rounded-full flex items-center justify-center border-4 border-[#392c16]"
      style={{
        top: -30,
        width: 70,
        height: 70,
      }}
    >
      <Animatable.View
        ref={viewRef}
        duration={2000}
      >
        {children}
      </Animatable.View>
    </TouchableOpacity>
  );
}

function Home() {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#1e151a',
      borderTopColor: '#1e151a'
    },
  }

  const addItem = useCallback((selectedScreen, navigate) => {
    if(selectedScreen === 'LandingPage') {
      navigate('AddBill');
    } else if(selectedScreen === 'Friends') {
      navigate('AddFriend');
    }
  })

  return (
    <CurvedBottomBarExpo.Navigator
      type="UP"
      screenOptions={screenOptions}
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      borderWidth={1}
      bgColor="#191d28"
      borderColor="#27262c"
      borderTopLeftRight
      initialRouteName="LandingPage"
      hide
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View
          className="flex items-center justify-center p-1 rounded-full"
          style={styles.btnCircleUp}>
          <TouchableOpacity
            className="flex items-center justify-center bg-[#ffdc64] rounded-full h-full w-full"
            onPress={() => addItem(selectedTab, navigate)}
          >
            <Ionicons name={'add'} color="#1b1104" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name="LandingPage"
        position='LEFT'
        component={() => <LandingPage />}
      />
      <CurvedBottomBarExpo.Screen
        name="Wallet"
        position='LEFT'
        component={() => <Wallet />}
      />
      <CurvedBottomBarExpo.Screen
        position='RIGHT'
        name="Friends" component={() => <Friends />}
      />
      <CurvedBottomBarExpo.Screen
        position='RIGHT'
        name="Notification" component={() => <Notifications />}
      />
    </CurvedBottomBarExpo.Navigator>
  )
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    bottom: 24,
    shadowColor: '#d1b34b',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

export default Home;