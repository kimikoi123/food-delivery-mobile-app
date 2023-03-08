import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../global/styles';
import {Icon} from '@rneui/themed';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function FreeDeliveryItem({item}) {
  return (
    <Pressable>
      <TouchableOpacity>
        <View
          style={{
            borderColor: colors.grey4,
            borderWidth: 1,
            marginRight: 15,
            width: SCREEN_WIDTH * 0.8,
            borderRadius: 10
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={item.image}
              style={{width: '100%', height: 150, borderRadius: 10}}
            />
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, .3)',
                padding: 3,
                borderRadius: 4,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                {item.averageReview}
              </Text>
              <Text style={{color: 'white'}}>
                {item.numberOfReview} reviews
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, paddingLeft: 5}}>
              {item.restaurantName}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 20,
                  borderRightColor: colors.grey4,
                  borderRightWidth: 1,
                }}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  size={20}
                  color={colors.grey3}
                />
                <Text>{item.farAway} Min</Text>
              </View>
              <Text style={{paddingLeft: 10}}>{item.businessAddress}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Pressable>
  );
}
