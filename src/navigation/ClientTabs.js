import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Tab = createBottomTabNavigator()

export default function RootClientTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons,
            }}
            
        >
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons 
                        name="home" 
                        color={color} 
                        size={size} 
                      />
                    ),
                    headerShown: false
                  }}
                  labeled={true}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons 
                        name="magnify" 
                        color={color} 
                        size={size} 
                      />
                    ),
                    headerShown: false
                  }}
                  labeled={true}
            />
            <Tab.Screen 
                name="MyOrdersScreen" 
                component={MyOrdersScreen}
                options={{
                    tabBarLabel: 'My Orders',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons 
                        name="order-bool-descending" 
                        color={color} 
                        size={size} 
                      />
                    ),
                    headerShown: false
                  }}
                  labeled={true}
            />
            <Tab.Screen 
                name="MyAccountScreen" 
                component={MyAccountScreen}
                options={{
                    tabBarLabel: 'My Account',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons 
                        name="account-multiple-outline" 
                        color={color} 
                        size={size} 
                      />
                    ),
                    headerShown: false
                  }}
                  labeled={true}
            />
        </Tab.Navigator>
    )
}