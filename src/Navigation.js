import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';


import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'playcircleo',
  },
  Wallet: {
    lib: AntDesign,
    name: 'calendar',
  },
  Notifications: {
    lib: Octicons,
    name: 'location',
  },
  Settings: {
    lib: AntDesign,
    name: 'user',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator  
          screenOptions={({ route, navigation }) => ({
            
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#CCC1F9',
          borderWidth: -1,
        
        },
        activeTintColor: '#53038E',
        inactiveTintColor: '#A965DB',
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Pregações',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Acontece',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: 'Como Chegar',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: 'Perfil',
        }}
      />
      
    </Tab.Navigator>

  );
}