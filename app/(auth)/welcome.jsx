import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import React, { useRef, useState } from 'react';
import { router } from 'expo-router';

export default function Welcome() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const user = true;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}
    >
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => {
          router.replace('/(main)/homepage');
        }}
        style={{
          position: 'absolute',
          top: 50,
          right: 4,
          padding: 8,
          zIndex: 10, // Ensure this is on top of the swiper
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'SfProSemiBold',
          }}
        >
          Sari peste
        </Text>
      </TouchableOpacity>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View
            style={{
              width: 9,
              height: 9,
              marginHorizontal: 4,
              backgroundColor: '#E2E8F0',
              borderRadius: '100%',
            }}
            onIndexChanged={(index) => setActiveIndex(index)}
          />
        }
        activeDot={
          <View
            style={{
              width: 9,
              height: 9,
              marginHorizontal: 4,
              backgroundColor: '#6a7bff',
              borderRadius: '100%',
            }}
          />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        containerStyle={{ flexGrow: 1 }} // Ensure the swiper takes full available height
      >
        {/* Slide 1 */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={require('../../assets/images/welcome2.jpg')}
            style={{
              width: '100%',
              height: '50%',
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontFamily: 'SfProSemiBold',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Găsește Evenimente Creștine Aproape de Tine și din Întreaga Țară!
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'SfProRegular',
              textAlign: 'center',
              color: '#858585',
              marginTop: 10,
            }}
          >
            Explorează conferințe, seminarii, concerte și multe altele din întreaga țară. Fii la
            curent cu cele mai importante evenimente creștine și participă la ele.
          </Text>
        </View>

        {/* Slide 2 */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={require('../../assets/images/welcome2.jpg')}
            style={{
              width: '100%',
              height: '50%',
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontFamily: 'SfProSemiBold',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Primești Notificări și Actualizări
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'SfProRegular',
              textAlign: 'center',
              color: '#858585',
              marginTop: 10,
            }}
          >
            Rămâi informat cu privire la evenimentele creștine din zona ta prin notificări și
            actualizări. Nu rata niciodată o oportunitate de a participa.
          </Text>
        </View>

        {/* Slide 3 */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={require('../../assets/images/welcome2.jpg')}
            style={{
              width: '100%',
              height: '50%',
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontFamily: 'SfProSemiBold',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Împărtășește și Invitați Prietenii
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'SfProRegular',
              textAlign: 'center',
              color: '#858585',
              marginTop: 10,
            }}
          >
            Invită-ți prietenii și împărtășește experiențele tale. Fii parte dintr-o comunitate
            activă și implicată.
          </Text>
        </View>
      </Swiper>

      {/* Action Button and Dots */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {/* Action Button */}
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 14,
            backgroundColor: '#6a7bff',
            borderRadius: 32,
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => {
            activeIndex < 2 ? swiperRef.current?.scrollBy(1) : router.replace('/(auth)/sign-up');
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: 'SfProSemiBold',
            }}
          >
            {activeIndex < 2 ? 'Mai departe' : 'Începe'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
