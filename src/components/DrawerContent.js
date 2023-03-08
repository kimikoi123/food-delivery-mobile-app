import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Linking, Pressable, Alert, Switch} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from '@rneui/themed';
import {colors} from '../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  const [value, setValue] = useState(false);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: 15,
              marginVertical: 0,
            }}>
            <Avatar
              size={75}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              avatarStyle={{borderWidth: 4, borderColor: 'white'}}
            />
            <View>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                John Mark
              </Text>
              <Text style={{color: '#fff'}}>john@xpressfood.com</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginLeft: 10}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>1</Text>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                My Favorites
              </Text>
            </View>
            <View style={{alignItems: 'center', marginLeft: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>0</Text>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>My Cart</Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotion"
          icon={({color, size}) => (
            <MaterialCommunityIcons name="tag" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <MaterialCommunityIcons name="lifebuoy" color={color} size={size} />
          )}
        />

        <View style={{marginHorizontal: 15}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Preferences</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Text
              style={{color: colors.grey1, fontWeight: 'bold', fontSize: 16}}>
              Dark Theme
            </Text>
            <Switch
              color="#2089dc"
              value={value}
              onValueChange={() => setValue(!value)}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <MaterialCommunityIcons
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
}
