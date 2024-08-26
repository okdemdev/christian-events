import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.7;
const cardHeight = 300; // Fixed height for all cards

export default function EventCard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Events'));
        const eventData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const renderEventCard = (event) => (
    <View key={event.id} style={styles.cardWrapper}>
      <View style={styles.card}>
        <Image source={{ uri: event.poster }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {event.titlu}
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <AntDesign name="calendar" size={14} color="#6B7280" />
              <Text style={styles.infoText}>{event.data}</Text>
            </View>
            <View style={styles.infoItem}>
              <AntDesign name="clockcircleo" size={14} color="#6B7280" />
              <Text style={styles.infoText}>{event.ora}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>Gratuit</Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Cumpara Bilet</Text>
              <AntDesign name="arrowright" size={14} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return <>{events.map(renderEventCard)}</>;
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: cardWidth,
    height: cardHeight,
    marginRight: 16,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 8,
  },
  image: {
    width: '100%',
    height: cardHeight * 0.5,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SfProSemiBold',
    fontSize: 16,
    color: '#1F2937',
    lineHeight: 22,
    height: 44, // Fixed height for 2 lines
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'SfProRegular',
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTag: {
    backgroundColor: '#E6F7E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  priceText: {
    fontFamily: 'SfProSemiBold',
    fontSize: 12,
    color: '#4CAF50',
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A7BFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buyButtonText: {
    fontFamily: 'SfProSemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginRight: 6,
  },
});
