import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Button, Icon} from '@rneui/themed';
import HomeHeader from '../components/HomeHeader';
import {categoriesData, restaurantsData} from '../global/Data';
import CountDown from 'react-native-countdown-component';
import CategoriesItem from '../components/CategoriesItem';
import FreeDeliveryItem from '../components/FreeDeliveryItem';
import RestaurantsInYourArea from '../components/RestaurantsInYourArea';

const NUMBER_COUNTDOWN = 3600;

export default function HomeScreen({navigation}) {
  const [isDelivery, setIsDelivery] = useState(true);
  const [categorySelected, setCategorySelected] = useState(0);

  return (
    <View style={{position: 'relative'}}>
      <ScrollView>
        <HomeHeader navigation={navigation} />
        <View style={{flex: 1}}>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => setIsDelivery(true)}>
              <View
                style={{
                  ...styles.buttonStyle,
                  backgroundColor: isDelivery ? colors.buttons : colors.grey5,
                }}>
                <Text>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsDelivery(false)
              navigation.navigate('RestaurantsMap')
            } }>
              <View
                style={{
                  ...styles.buttonStyle,
                  backgroundColor: !isDelivery ? colors.buttons : colors.grey5,
                }}>
                <Text>Pick-up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginBottom: 20,
              marginTop: 5,
            }}>
            <View
              style={{
                backgroundColor: colors.grey4,
                flexDirection: 'row',
                paddingVertical: 5,
                borderRadius: 9999,
                paddingHorizontal: 40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  size={24}
                  color={colors.grey1}
                />
                <Text>22 Besse Street</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 9999,
                  backgroundColor: 'white',
                  marginLeft: 20,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                }}>
                <Icon
                  type="material-community"
                  name="clock-time-five"
                  size={24}
                  color={colors.grey1}
                />
                <Text>Now</Text>
              </View>
            </View>
            <Icon
              type="material-community"
              name="tune"
              size={30}
              color={colors.grey1}
            />
          </View>
          <View style={{backgroundColor: colors.grey5}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                ...styles.alignPadding,
              }}>
              Categories
            </Text>
          </View>
          <View style={{marginVertical: 15, ...styles.alignPadding}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={({item, index}) => (
                <CategoriesItem
                  item={item}
                  index={index}
                  categorySelected={categorySelected}
                  setCategorySelected={setCategorySelected}
                />
              )}
            />
          </View>
          <View style={{backgroundColor: colors.grey5}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                ...styles.alignPadding,
              }}>
              Free Delivery Now
            </Text>
          </View>
          <View style={{flexDirection: 'row', ...styles.alignPadding}}>
            <Text style={{fontWeight: 'bold', marginRight: 10, paddingTop: 12}}>
              Options changing in
            </Text>
            <CountDown
              until={NUMBER_COUNTDOWN}
              digitStyle={{backgroundColor: '#52cc02'}}
              digitTxtStyle={{color: 'white'}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>
          <View style={styles.alignPadding}>
            <FlatList
              data={restaurantsData}
              renderItem={({item}) => <FreeDeliveryItem item={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{backgroundColor: colors.grey5}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                ...styles.alignPadding,
              }}>
              Promotions Available
            </Text>
          </View>
          <View style={styles.alignPadding}>
            <FlatList
              data={restaurantsData}
              renderItem={({item}) => <FreeDeliveryItem item={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{backgroundColor: colors.grey5}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                ...styles.alignPadding,
              }}>
              Restaurants in your Area
            </Text>
          </View>
          <View>
            {restaurantsData.map(item => (
              <RestaurantsInYourArea item={item} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>

      {isDelivery && (
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
            backgroundColor: 'white',
            borderRadius: 9999,
            width: 50,
            height: 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantsMap')}>
            <Icon
              type="material-community"
              name="map-marker"
              size={24}
              color={colors.buttons}
            />
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 9999,
  },

  alignPadding: {
    paddingLeft: 15,
  },
});
