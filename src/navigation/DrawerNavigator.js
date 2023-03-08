import React from 'react';
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../global/styles';
import { NavigationContainer } from '@react-navigation/native';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
        >
          <Drawer.Screen 
            name="RootClientTabs" 
            component={RootClientTabs}
            options = {{
              title: "Client",
              drawerIcon: ({ focused, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={focused ? '#7cc' : colors.grey2}
                  size={size}
                />
              ),
              headerShown: false
            }}
          />
          <Drawer.Screen 
            name="Business Console Screen" 
            component={BusinessConsoleScreen}
            options = {{
              title: "Business Console",
              drawerIcon: ({ focused, size }) => (
                <MaterialCommunityIcons
                  name="domain"
                  color={focused ? '#7cc' : colors.grey2}
                  size={size}
                />
              ),
              headerShown: false
            }}
          />
        </Drawer.Navigator>
      );
}
