import React from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import {colors} from '../global/styles';

export default function CategoriesItem({
  item,
  index,
  categorySelected,
  setCategorySelected,
}) {
  return (
      <TouchableOpacity onPress={() => setCategorySelected(index)}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            backgroundColor:
              categorySelected === index ? colors.buttons : colors.grey5,
            width: 90,
            minHeight: 130,
            marginRight: 15,
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <View style={{width: 50, height: 50}}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%', borderRadius: 9999}}
            />
          </View>
          <Text style={{marginTop: 5}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
  );
}
