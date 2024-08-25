import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function homepage() {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      {/* HEADER */}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 16,
        }}
      >
        {/* MENU ICON CONTAINER */}

        <TouchableOpacity
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 14,
            backgroundColor: '#fafafa',
            borderRadius: 15,
          }}
        >
          <Entypo name="menu" size={32} color="#272a2e" />
        </TouchableOpacity>

        {/* LOGO */}

        <Text
          style={{
            fontFamily: 'SfProSemiBold',
          }}
        >
          Evenimente Crestine
        </Text>

        {/* PROFILE */}
        <TouchableOpacity
          style={{
            width: 46,
            height: 46,
            backgroundColor: 'red',
            borderRadius: '50%',
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
            source={require('../../assets/images/profile1.jpg')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
